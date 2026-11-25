// Have You Tried Turning It Off? — entry program (node22, TypeScript as-is).
// Writes one funny line a hopeless tech support agent says to a desperate
// customer, to /output/entry.txt. Deterministic: same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I\u2019ve just spoken to the engineers and they said your issue is a \u2018known problem\u2019, which in our language means nobody knows how to fix it \u2014 but we all agree it exists.";

// Gate self-check: the scorer requires UTF-8 text of 1-199 chars, not only
// whitespace. Fail loudly instead of shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 199 || !LINE.trim()) {
  throw new Error(`entry length ${LINE.length} is outside the 1-199 gate`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
