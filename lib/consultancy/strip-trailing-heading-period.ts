/** Removes a single decorative ASCII full stop at the end of a heading string only. */
export function stripTrailingHeadingPeriod(s: string): string {
  return s.replace(/\.$/, "");
}
