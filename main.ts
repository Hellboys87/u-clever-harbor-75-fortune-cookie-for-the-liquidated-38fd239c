import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const fortune =
  "Your fortune: the market took your margin, not your mojo — trade smaller, patience will pay you back.";

const outPath = process.env.MAKEFUN_OUTPUT_DIR
  ? join(process.env.MAKEFUN_OUTPUT_DIR, "entry.txt")
  : "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, fortune + "\n", "utf8");
