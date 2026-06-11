import { cp, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const rootDir = resolve(process.cwd());

const syncTargets = [
  {
    source: resolve(rootDir, "frontend", "src"),
    target: resolve(rootDir, "src"),
    recursive: true,
  },
  {
    source: resolve(rootDir, "frontend", "public"),
    target: resolve(rootDir, "public"),
    recursive: true,
  },
  {
    source: resolve(rootDir, "frontend", "index.html"),
    target: resolve(rootDir, "index.html"),
    recursive: false,
  },
];

const copyEntry = async ({ source, target, recursive }) => {
  await mkdir(dirname(target), { recursive: true });
  await cp(source, target, {
    force: true,
    recursive,
    preserveTimestamps: true,
  });
};

for (const entry of syncTargets) {
  await copyEntry(entry);
}

