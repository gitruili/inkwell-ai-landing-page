import fs from "fs";
import { spawnSync } from "child_process";
const md = fs.readFileSync("UI_REVIEW.md","utf8");
const blocks = md.split(/\n(?=##\s+)/g).filter(b => b.startsWith("## "));
for (const block of blocks) {
  const [titleLine, ...rest] = block.trim().split("\n");
  const title = titleLine.replace(/^##\s+/, "").slice(0, 80);
  const body = rest.join("\n").trim();
  spawnSync("gh", ["issue", "create", "--title", title, "--body", body], { stdio: "inherit" });
}
