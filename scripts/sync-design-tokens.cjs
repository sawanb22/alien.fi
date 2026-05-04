/**
 * Copies colors_and_type.css into next-app/public for /colors_and_type.css.
 * Prefer monorepo root (parent of next-app) when present locally; otherwise
 * use design/colors_and_type.css so CI / GitHub-only clones still build.
 */
const fs = require("fs");
const path = require("path");

const nextAppDir = path.join(__dirname, "..");
const monoRoot = path.join(nextAppDir, "..", "colors_and_type.css");
const bundled = path.join(nextAppDir, "design", "colors_and_type.css");
const src = fs.existsSync(monoRoot) ? monoRoot : bundled;
const dest = path.join(nextAppDir, "public", "colors_and_type.css");

if (!fs.existsSync(src)) {
  console.error("sync-design-tokens: missing source file:", src);
  process.exit(1);
}
fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.copyFileSync(src, dest);
console.log("sync-design-tokens:", src, "->", dest);
