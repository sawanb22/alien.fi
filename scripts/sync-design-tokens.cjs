/**
 * Copies repo-root colors_and_type.css into next-app/public so Turbopack
 * does not need to resolve parent-directory imports (broken on Windows).
 * Run via npm run sync:tokens (also predev / prebuild).
 */
const fs = require("fs");
const path = require("path");

const nextAppDir = path.join(__dirname, "..");
const src = path.join(nextAppDir, "..", "colors_and_type.css");
const dest = path.join(nextAppDir, "public", "colors_and_type.css");

if (!fs.existsSync(src)) {
  console.error("sync-design-tokens: missing source file:", src);
  process.exit(1);
}
fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.copyFileSync(src, dest);
console.log("sync-design-tokens: copied to", dest);
