import { test, expect } from "@fixtures/baseFixture";
import { standartUserCredentials, invalidCredentials } from "../src/modules/data/credentials"

test.describe("Login form tests", () => {
  test("Verify that user can login with valid credentials", async ({
    page,
    loginPage,
    productsPage
  }) => {   
    await page.goto("/");
    await loginPage.login(standartUserCredentials);

    await expect(productsPage.productsPageTitle).toBeVisible();
  });

  test("Verify that user can not login with invalid credentials", async ({
    page,
    loginPage
  }) => {
    await page.goto("/");
    await loginPage.login(invalidCredentials);

    await expect(loginPage.errorAlert).toHaveText(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  test("Verify that user can not login without credentials", async ({
    page,
    loginPage
  }) => {
    await page.goto("/");
    await loginPage.submitLogin();

    await expect(loginPage.userNameInputField).toHaveClass(/error/);
    await expect(loginPage.passwordInputField).toHaveClass(/error/);
  });
});
