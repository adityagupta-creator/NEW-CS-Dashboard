import { access, copyFile } from "node:fs/promises";
import { constants } from "node:fs";
import { resolve } from "node:path";

const distDir = resolve("dist");
const indexPath = resolve(distDir, "index.html");
const notFoundPath = resolve(distDir, "404.html");

try {
  await access(indexPath, constants.F_OK);
} catch {
  console.error("postbuild: dist/index.html not found. Did the build run?");
  process.exit(1);
}

await copyFile(indexPath, notFoundPath);
console.log("postbuild: copied index.html to 404.html for GitHub Pages routing.");
