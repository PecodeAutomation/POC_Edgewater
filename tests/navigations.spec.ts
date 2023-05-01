import { test, expect } from "@fixtures/baseFixture";

test.describe("Navigations by links", () => {
  test("Verify navigation to EdgeFx product page", async ({
    page,
    navigationBar,
  }, testInfo) => {
    await page.goto("/");
    await navigationBar.acceptCookies();
    if (testInfo.project.name === "mobileSafari") {
      await navigationBar.openMenuByToggleButton();
    }
    await navigationBar.openProductsCatalog();
    await navigationBar.openEdgeFxPage();

    await expect(page).toHaveURL(/.*edgefx/);
  });

  test("Verify navigation to Markets page", async ({
    page,
    navigationBar,
  }, testInfo) => {
    await page.goto("/");
    await navigationBar.acceptCookies();
    if (testInfo.project.name === "mobileSafari") {
      await navigationBar.openMenuByToggleButton();
    }
    await navigationBar.openMarketsPage();

    await expect(page).toHaveURL(/.*markets/);
  });

  test("Verify navigation to Contact page", async ({
    page,
    navigationBar,
  }, testInfo) => {
    await page.goto("/");
    await navigationBar.acceptCookies();
    if (testInfo.project.name === "mobileSafari") {
      await navigationBar.openMenuByToggleButton();
    }
    await navigationBar.openProductsCatalog();
    await navigationBar.openContacPage();

    await expect(page).toHaveURL(/.*contact/);
  });
});
