// Estimates how wide a title renders in Google's desktop results (Arial, 20px).
// Widths are standard Arial/Helvetica advance widths in 1/1000 em. Unknown characters count as 556.
// Usage: node scripts/title-width.mjs "Some title"   or   import { titlePixelWidth } from "./title-width.mjs"

const W = {
  " ": 278, "!": 278, '"': 355, "#": 556, $: 556, "%": 889, "&": 667, "'": 191, "(": 333, ")": 333, "*": 389,
  "+": 584, ",": 278, "-": 333, ".": 278, "/": 278, ":": 278, ";": 278, "<": 584, "=": 584, ">": 584, "?": 556,
  "@": 1015, "[": 278, "\\": 278, "]": 278, "^": 469, _: 556, "`": 333, "{": 334, "|": 260, "}": 334, "~": 584,
  "–": 556, "—": 1000, "’": 222, "·": 278,
  A: 667, B: 667, C: 722, D: 722, E: 667, F: 611, G: 778, H: 722, I: 278, J: 500, K: 667, L: 556, M: 833,
  N: 722, O: 778, P: 667, Q: 778, R: 722, S: 667, T: 611, U: 722, V: 667, W: 944, X: 667, Y: 667, Z: 611,
  a: 556, b: 556, c: 500, d: 556, e: 556, f: 278, g: 556, h: 556, i: 222, j: 222, k: 500, l: 222, m: 833,
  n: 556, o: 556, p: 556, q: 556, r: 333, s: 500, t: 278, u: 556, v: 500, w: 722, x: 500, y: 500, z: 500,
};
for (const d of "0123456789") W[d] = 556;

export const MAX_TITLE_CHARS = 60;
export const MAX_TITLE_PX = 561;

export function titlePixelWidth(title, fontPx = 20) {
  let units = 0;
  for (const ch of title) units += W[ch] ?? 556;
  return Math.round((units * fontPx) / 1000);
}

if (import.meta.url === `file://${process.argv[1]?.replace(/\\/g, "/")}` || process.argv[1]?.endsWith("title-width.mjs")) {
  for (const t of process.argv.slice(2)) console.log(`${t.length}ch ${titlePixelWidth(t)}px  ${t}`);
}
