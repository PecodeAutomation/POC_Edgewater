import { test, expect } from "@fixtures/notLoginedFixture";
import { standartUserCredentials, invalidCredentials } from "../src/modules/data/credentials"

test.describe.configure({ mode: "parallel"});

test.describe("Login form tests", () => {
  test("Verify that user can login with valid credentials", async ({
    headerComponent,
    loginPage,
    page
  }) => {   
    await page.goto("/");
    await loginPage.login(standartUserCredentials);

    await expect(headerComponent.settingsButton).toBeVisible();
  });

  test("Verify that user can not login with invalid credentials", async ({
    page,
    loginPage
  }) => {
    await page.goto("/");
    await loginPage.login(invalidCredentials);

    await expect(loginPage.errorAlert).toHaveText(
      "Usuario o contraseña incorrecto"
    );
  });
});
