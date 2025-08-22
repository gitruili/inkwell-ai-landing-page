import { test, expect } from "@playwright/test";

const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile",  width: 375,  height: 812 },
];

for (const vp of viewports) {
  test(`home ${vp.name} visual`, async ({ page, browserName }) => {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
    await expect(page).toHaveScreenshot(`home-${vp.name}-${browserName}.png`, {
      maxDiffPixelRatio: 0.01
    });
  });
}
