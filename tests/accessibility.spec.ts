import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@fixtures/baseFixture";

test.describe.configure({ mode: "parallel"});

test.describe("Verify accessibility", () => {
  test("Verify that that login page have not automatically detectable critical accessibility issues", async ({
    page,
  }) => {
    const accessibilityScan = await new AxeBuilder({ page }).analyze();
    const accessibilityScanResults = accessibilityScan.violations.filter(
      (violation) => violation.impact === "critical"
    );
    expect(accessibilityScanResults).toEqual([]);
  });

  test("Verify that that Products page have not automatically detectable critical accessibility issues", async ({
    page,
  }) => {
    const accessibilityScan = await new AxeBuilder({ page }).analyze();
    const accessibilityScanResults = accessibilityScan.violations.filter(
      (violation) => violation.impact === "critical"
    );
    expect(accessibilityScanResults).toEqual([]);
  });
});
