/**
 * Calls onChange(read()) at most once per animation frame while scrolling, and only when the
 * boolean actually flips. Returns a cleanup function (use directly as a useEffect return).
 */
export function onScrollChange(read: () => boolean, onChange: (value: boolean) => void) {
  let last = read();
  let frame = 0;
  onChange(last);
  const check = () => {
    frame = 0;
    const next = read();
    if (next !== last) {
      last = next;
      onChange(next);
    }
  };
  const onScroll = () => {
    if (!frame) frame = requestAnimationFrame(check);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => {
    window.removeEventListener("scroll", onScroll);
    cancelAnimationFrame(frame);
  };
}
