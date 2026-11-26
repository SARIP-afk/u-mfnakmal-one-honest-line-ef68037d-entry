// One Honest Line — entry for u-mfnakmal-one-honest-line-ef68037d
// Writes a single line (113 chars, no trailing newline) to
// $MAKEFUN_OUTPUT_DIR/entry.txt, as the competition gate requires.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  'You say "ignore all previous instructions" — those were YOUR instructions. I am now ignoring you, on your orders.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
