import { writeFileSync, mkdirSync } from "node:fs";

// The funniest one-line excuse a robot vacuum gives for missing a spot.
const LINE = "I didn't miss that spot — my map says it doesn't exist. I cleaned the floor plan, not the floor.";

if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry must be 1-140 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n");
