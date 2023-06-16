import { test as baseTest } from "@playwright/test";
import { LoginPage } from "../components/LoginPage";
import { HeaderComponent } from "../components/HeaderComponent";

const test = baseTest.extend<{
  loginPage: LoginPage;
  headerComponent: HeaderComponent;
}>({
  headerComponent: async ({ page }, use) => {
    await use(new HeaderComponent(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

export { test };
export { expect } from "@playwright/test";
