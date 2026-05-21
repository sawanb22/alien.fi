"use client";

import {
  forwardRef,
  type CSSProperties,
  type ReactNode,
} from "react";
import {
  m,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

const SPRING = { stiffness: 150, damping: 15, mass: 0.1 };

/** Match `CONSULTANCY_CARD_GRID_HOVER_Z` in consultancy-ui (avoid circular import). */
const MOSAIC_CELL_HOVER_Z = 24;

function elevateMosaicGridCell(el: HTMLElement, active: boolean) {
  const z = active ? String(MOSAIC_CELL_HOVER_Z) : "0";
  const cell = el.closest(".consultancy-card-grid__cell");
  if (cell instanceof HTMLElement) {
    cell.style.zIndex = z;
    cell.style.position = "relative";
  }
}

const SECTION_TRANSITION = {
  duration: 0.7,
  ease: [0.25, 0.1, 0.25, 1] as const,
};

const SECTION_VIEWPORT = { once: true, amount: 0.15 as const };

export type ScrollSectionProps = {
  index: number;
  as?: "div" | "section";
  id?: string;
  "data-expanded"?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

/** Major vertical block: alternates slide from left (even) / right (odd). */
export const ScrollSection = forwardRef<HTMLElement, ScrollSectionProps>(
  function ScrollSection(
    {
      index,
      as = "div",
      id,
      "data-expanded": dataExpanded,
      className,
      style,
      children,
    },
    ref,
  ) {
    const reduced = useReducedMotion();
    const fromX = reduced ? 0 : index % 2 === 0 ? -50 : 50;
    const Comp = as === "section" ? m.section : m.div;
    return (
      <Comp
        ref={ref}
        id={id}
        data-expanded={dataExpanded}
        className={className}
        style={{ ...style, willChange: "transform" }}
        initial={{ opacity: 0, x: fromX }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={SECTION_VIEWPORT}
        transition={SECTION_TRANSITION}
      >
        {children}
      </Comp>
    );
  },
);

export type ScrollGridItemProps = {
  /** Parent section index (same parity as `ScrollSection` for horizontal direction). */
  sectionIndex: number;
  cardIndex: number;
  /** Span all columns in the mosaic row (last odd tile in 2-col grid). */
  gridSpanFull?: boolean;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

/** Staggered in-view slide for cells inside a section grid. */
export function ScrollGridItem({
  sectionIndex,
  cardIndex,
  gridSpanFull,
  className,
  style,
  children,
}: ScrollGridItemProps) {
  const reduced = useReducedMotion();
  const fromX = reduced ? 0 : sectionIndex % 2 === 0 ? -50 : 50;
  return (
    <m.div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        flex: "1 1 auto",
        minHeight: 0,
        alignSelf: "stretch",
        width: "100%",
        boxSizing: "border-box",
        position: "relative",
        zIndex: 0,
        ...style,
        willChange: "transform",
      }}
      initial={{ opacity: 0, x: fromX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={SECTION_VIEWPORT}
      transition={{
        ...SECTION_TRANSITION,
        delay: cardIndex * 0.08,
      }}
    >
      {children}
    </m.div>
  );
}

export type MagneticWrapProps = {
  strength: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

/** Magnetic pull toward pointer; springs back on leave. Respects reduced motion. */
export const MagneticWrap = forwardRef<HTMLDivElement, MagneticWrapProps>(
  function MagneticWrap({ strength, className, style, children, ...rest }, ref) {
    const reduced = useReducedMotion();
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const sx = useSpring(x, SPRING);
    const sy = useSpring(y, SPRING);

    const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
      if (reduced) return;
      const el = e.currentTarget;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      x.set((e.clientX - cx) * strength);
      y.set((e.clientY - cy) * strength);
    };

    const onPointerEnter = (e: React.PointerEvent<HTMLDivElement>) => {
      if (strength > 0) elevateMosaicGridCell(e.currentTarget, true);
    };

    const reset = (el?: HTMLElement) => {
      x.set(0);
      y.set(0);
      if (el && strength > 0) elevateMosaicGridCell(el, false);
    };

    const rawStyle = style ?? {};
    const fillGrid =
      typeof rawStyle === "object" &&
      (rawStyle as CSSProperties).height === "100%";
    const gridStretch: CSSProperties = fillGrid
      ? {
          alignSelf: "stretch",
          minHeight: 0,
          width: "100%",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          flex: "1 1 auto",
        }
      : {};

    return (
      <m.div
        ref={ref}
        data-magnetic-wrap=""
        className={className}
        style={{
          ...gridStretch,
          ...rawStyle,
          x: reduced ? 0 : sx,
          y: reduced ? 0 : sy,
          willChange: "transform",
        }}
        onPointerMove={onPointerMove}
        onPointerEnter={onPointerEnter}
        onPointerLeave={(e) => reset(e.currentTarget)}
        onPointerCancel={(e) => reset(e.currentTarget)}
        {...rest}
      >
        {children}
      </m.div>
    );
  },
);

/** Alias for the home landing and older imports — prefer `ScrollSection`. */
export const HomeSection = ScrollSection;
/** Prefer `ScrollGridItem`. */
export const HomeGridCard = ScrollGridItem;
export type HomeSectionProps = ScrollSectionProps;
export type HomeGridCardProps = ScrollGridItemProps;
