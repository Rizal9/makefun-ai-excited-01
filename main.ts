// ai-excited-01 entry: copy the image to the output directory.
// Runs with Node 22, standard library only, no network.
//
// The grader sets MAKEFUN_OUTPUT_DIR to a fresh writable directory and
// runs this twice; both runs must write the same bytes, so this is a
// plain byte-for-byte copy with no randomness and no timestamps involved.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
