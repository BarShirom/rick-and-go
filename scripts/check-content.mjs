import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const forbidden = /\u2014|&mdash;|&#0*8212;|&#x0*2014;|\\u2014|\\u\{2014\}/iu;
const textFile = /\.(tsx?|css|html|svg|json|txt|xml)$/i;

async function scan(path) {
  const entries = await readdir(path, { withFileTypes: true });
  const matches = await Promise.all(entries.map(async (entry) => {
    const file = join(path, entry.name);
    if (entry.isDirectory()) return scan(file);
    if (textFile.test(file) && forbidden.test(await readFile(file, "utf8"))) return [file];
    return [];
  }));
  return matches.flat();
}

const violations = [...await scan("src"), ...await scan("public")];
if (forbidden.test(await readFile("index.html", "utf8"))) violations.push("index.html");
if (violations.length) {
  console.error("Forbidden em dash content:", violations.join(", "));
  process.exitCode = 1;
} else {
  console.log("Content check passed: no literal or encoded em dashes.");
}
