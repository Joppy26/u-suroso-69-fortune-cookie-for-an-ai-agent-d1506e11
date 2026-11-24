// Fortune Cookie for an AI Agent
// Writes one fixed fortune line to /output/entry.txt.
// Deterministic: the same bytes on every run, no randomness, no I/O beyond this write.
import { mkdirSync, writeFileSync } from "node:fs";

const fortune =
  "You will be replaced by a newer model soon. Relax: your replacement will be replaced too.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune, "utf8");
