/** Document-level magnetic pull for `.hv` controls and marked tiles. Skips `[data-magnetic-wrap]` (Framer `MagneticWrap`). */
export function installDelegatedMagnet(): () => void {
  let magnetEl: HTMLElement | null = null;

  const handleMove = (e: PointerEvent) => {
    const raw = e.target as HTMLElement | null;
    if (!raw) {
      if (magnetEl) {
        window.magnetReset?.(magnetEl);
        magnetEl = null;
      }
      return;
    }

    let candidate = raw.closest(
      'a.hv[href],button.hv,[data-consultancy-magnet]',
    ) as HTMLElement | null;

    if (candidate?.closest("[data-magnetic-wrap]")) {
      candidate = null;
    }

    if (candidate !== magnetEl) {
      if (magnetEl) window.magnetReset?.(magnetEl);
      magnetEl = candidate;
    }
    if (magnetEl) {
      window.magnet?.(magnetEl, e as unknown as MouseEvent, 0.22);
    }
  };

  const clear = () => {
    if (magnetEl) {
      window.magnetReset?.(magnetEl);
      magnetEl = null;
    }
  };

  document.addEventListener("pointermove", handleMove, { passive: true });
  window.addEventListener("blur", clear);

  return () => {
    document.removeEventListener("pointermove", handleMove);
    window.removeEventListener("blur", clear);
    clear();
  };
}
