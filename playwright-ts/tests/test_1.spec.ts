import test from "../fixtures";
import { expect } from "@playwright/test";

test.describe("feature foo", () => {
  test("test 1", async ({ page }) => {
    // Assertions use the expect API.
    await page.goto("https://www.duckduckgo.com");
    const element = await page.$('[name="q"]');
    await element.click();
    await element.type("BrowserStack");
    await element.press("Enter");

    expect(page.locator("h1 >> nth=0")).toContainText("Spread DuckDuckGo");
  });
});
