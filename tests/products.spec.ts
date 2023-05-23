import { test, expect } from "@fixtures/baseFixture";
import { standartUserCredentials } from "../src/modules/data/credentials";

test.describe("Product page tests", () => {
  test("Verify that added product is present in the cart", async ({
    page,
    loginPage,
    productsPage,
    cartPage
  }) => {
    await page.goto("/");
    await loginPage.login(standartUserCredentials);
    await productsPage.addSpecificProductToCart("Sauce Labs Backpack");
    await productsPage.openCart();

    await expect(cartPage.productNames).toContainText("Sauce Labs Backpack");
  });

  test("Verify that badge icon displayed if product is added to the cart", async ({
    page,
    loginPage,
    productsPage,
  }) => {
    await page.goto("/");
    await loginPage.login(standartUserCredentials);
    await productsPage.addSpecificProductToCart("Sauce Labs Bolt T-Shirt");

    await expect(productsPage.cartBadgeIcon).toBeVisible();
  });

  test("Verify that user is redirected from cart page back to products page when clicks on 'Continue Shopping' button", async ({
    page,
    loginPage,
    productsPage,
    cartPage
  }) => {
    await page.goto("/");
    await loginPage.login(standartUserCredentials);
    await productsPage.addSpecificProductToCart("Sauce Labs Backpack");
    await productsPage.openCart();
    await cartPage.clickToContinueShopping();

    await expect(page).toHaveURL(/.*inventory/);
  });

  test("Verify that products sorting from Z-A works correctly", async ({
    page,
    loginPage,
    productsPage,
  }) => {
    await page.goto("/");
    await loginPage.login(standartUserCredentials);
    const result = await productsPage.testSortByZA();

    expect(result).toBeTruthy();
  });

  test("Verify that products sorting from A-Z works correctly", async ({
    page,
    loginPage,
    productsPage,
  }) => {
    await page.goto("/");
    await loginPage.login(standartUserCredentials);
    const result = await productsPage.testSortByAZ();

    expect(result).toBeTruthy();
  });

  test("Verify that products sorting from low to high price works correctly", async ({
    page,
    loginPage,
    productsPage,
  }) => {
    await page.goto("/");
    await loginPage.login(standartUserCredentials);
    const result = await productsPage.testSortPriceLowHigh();

    expect(result).toBeTruthy();
  });

  test("Verify that products sorting from high to low price works correctly", async ({
    page,
    loginPage,
    productsPage,
  }) => {
    await page.goto("/");
    await loginPage.login(standartUserCredentials);
    const result = await productsPage.testSortPriceHighLow();

    expect(result).toBeTruthy();
  });
});
