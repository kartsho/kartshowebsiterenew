import { cp, readdir, stat } from "node:fs/promises";
import { resolve } from "node:path";

const rootDir = resolve(process.cwd());
const distDir = resolve(rootDir, "dist");

const exists = async (path) => {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
};

if (!(await exists(distDir))) {
  console.error("dist/ not found. Run the build first.");
  process.exitCode = 1;
} else {
  const entries = await readdir(distDir, { withFileTypes: true });

  for (const entry of entries) {
    const source = resolve(distDir, entry.name);
    const target = resolve(rootDir, entry.name);

    await cp(source, target, {
      force: true,
      recursive: entry.isDirectory(),
      preserveTimestamps: true,
    });
  }
}
