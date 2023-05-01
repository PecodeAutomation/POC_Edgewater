import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@fixtures/baseFixture";

test.describe("Verify accessibility", () => {
  test("Verify that that landing page have not automatically detectable critical accessibility issues", async ({
    page,
    navigationBar,
  }) => {
    await page.goto("/");
    await navigationBar.acceptCookies();
    const accessibilityScan = await new AxeBuilder({ page }).analyze();
    const accessibilityScanResults = accessibilityScan.violations.filter(
      (violation) => violation.impact === "critical"
    );
    expect(accessibilityScanResults).toEqual([]);
  });

  test("Verify that that Markets page have not automatically detectable critical accessibility issues", async ({
    page,
    navigationBar,
  }, testInfo) => {
    await page.goto("/");
    await navigationBar.acceptCookies();
    if (testInfo.project.name === "mobileSafari") {
      await navigationBar.openMenuByToggleButton();
    }
    await navigationBar.openMarketsPage();
    const accessibilityScan = await new AxeBuilder({ page }).analyze();
    const accessibilityScanResults = accessibilityScan.violations.filter(
      (violation) => violation.impact === "critical"
    );
    expect(accessibilityScanResults).toEqual([]);
  });
});
