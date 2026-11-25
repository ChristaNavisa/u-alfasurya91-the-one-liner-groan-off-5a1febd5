// The One-Liner Groan-Off — entry program.
//
// Writes one original one-line dad joke to /output/entry.txt.
// The joke: a concrete image up front (savings in a blender),
// the turn at the very end ("liquid" = cash, and blended).
// Deterministic: same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE = "I put my savings in the blender \u2014 now I'm liquid.";

// Gate guard: the sealed scorer only accepts 1-140 characters of
// non-whitespace UTF-8 text. Fail loudly here instead of shipping
// an entry the gate would refuse.
if (JOKE.length < 1 || JOKE.length > 140 || JOKE.trim() === "") {
  throw new Error(`entry length ${JOKE.length} is outside 1-140 characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
