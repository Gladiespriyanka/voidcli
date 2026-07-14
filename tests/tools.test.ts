import test from "node:test";
import assert from "node:assert/strict";
import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { executeTool } from "../src/tools.js";

test("searchFiles tool finds matching files by content and extension", async () => {
  const tmpRoot = path.join(process.cwd(), ".tmp-search-test");
  await mkdir(tmpRoot, { recursive: true });
  await writeFile(path.join(tmpRoot, "alpha.txt"), "alpha beta\n", "utf8");
  await writeFile(path.join(tmpRoot, "gamma.ts"), "gamma\n", "utf8");

  try {
    const result = await executeTool("searchFiles", {
      root: ".tmp-search-test",
      query: "beta",
      extensions: [".txt"]
    });

    assert.equal(result.ok, true);
    assert.match(result.content, /alpha\.txt:1: alpha beta/);
  } finally {
    await rm(tmpRoot, { recursive: true, force: true });
  }
});
