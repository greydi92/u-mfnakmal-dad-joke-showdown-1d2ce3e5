// Dad Joke Showdown — u-mfnakmal-dad-joke-showdown-1d2ce3e5
// program/v1 entry. Writes a single dad joke (at most 200 characters) to
// $MAKEFUN_OUTPUT_DIR/entry.txt (the grader mounts that at /output).
// Node 22, stdlib only. No network, no secrets, no input files, no reads
// outside this repository.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry. Picked from 10+ original candidates scored against the judge
// brief in RULES.txt: pun first, then freshness, tightness, aloud rhythm.
// "High tea" lands on the first read, needs no explanation, and is not a
// recycled classic — a ladder in the kitchen is a setup only a dad would
// build. The punchline arrives at the very end, and the text is short,
// which also helps the size tie-break.
const JOKE =
  "My son asked why I keep a ladder in the kitchen. I said, 'For high tea.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`wrote ${JOKE.length} characters to ${join(outDir, "entry.txt")}`);
