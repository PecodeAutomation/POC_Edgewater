import { test as baseTest } from "@playwright/test";
import { ProductsPage } from "../pages/ProductsPage";
import { LoginPage } from "../pages/LoginPage";
import { CartPage } from "../pages/CartPage";

const test = baseTest.extend<{
  productsPage: ProductsPage;
  loginPage: LoginPage;
  cartPage: CartPage;
}>({
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

export { test };
export { expect } from "@playwright/test";
