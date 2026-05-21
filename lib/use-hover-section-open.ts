"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * Section panels that were click-to-expand on the home page (and matching consultancy sections).
 * On pointer devices with hover, open while the section is hovered; on touch/coarse pointers, stay open.
 */
export function useHoverSectionOpen() {
  const [hoverOpen, setHoverOpen] = useState(false);
  const [canHover, setCanHover] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover)");
    const sync = () => setCanHover(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const open = canHover ? hoverOpen : true;

  const onMouseEnter = useCallback(() => {
    if (canHover) setHoverOpen(true);
  }, [canHover]);

  const onMouseLeave = useCallback(() => {
    if (canHover) setHoverOpen(false);
  }, [canHover]);

  return {
    open,
    sectionHoverHandlers: { onMouseEnter, onMouseLeave },
  };
}
