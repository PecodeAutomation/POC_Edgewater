import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@fixtures/baseFixture";
import { standartUserCredentials } from "../src/modules/data/credentials"

test.describe("Verify accessibility", () => {
  test("Verify that that login page have not automatically detectable critical accessibility issues", async ({
    page,
  }) => {
    await page.goto("/");
    const accessibilityScan = await new AxeBuilder({ page }).analyze();
    const accessibilityScanResults = accessibilityScan.violations.filter(
      (violation) => violation.impact === "critical"
    );
    expect(accessibilityScanResults).toEqual([]);
  });

  test("Verify that that Products page have not automatically detectable critical accessibility issues", async ({
    page,
    loginPage
  }) => {
    await page.goto("/");
    await loginPage.login(standartUserCredentials);
    const accessibilityScan = await new AxeBuilder({ page }).analyze();
    const accessibilityScanResults = accessibilityScan.violations.filter(
      (violation) => violation.impact === "critical"
    );
    expect(accessibilityScanResults).toEqual([]);
  });
});
