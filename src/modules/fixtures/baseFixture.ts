import { test as baseTest } from "@playwright/test";
import { LoginPage } from "../components/LoginPage";
import { HeaderComponent } from "../components/HeaderComponent";
import { SettingsComponent } from "../components/SettingsComponent";
import { OrdersWidget } from "../components/OrdersWidget";
import { TradingWidget } from "../components/TradingWidget";
import { standartUserCredentials } from "../data/credentials";

const test = baseTest.extend<{
  loginPage: LoginPage;
  headerComponent: HeaderComponent;
  settingsComponent: SettingsComponent;
  ordersWidget: OrdersWidget;
  tradingWidget: TradingWidget;
}>({
  page: async ({ page }, use) => {
    await page.goto("/");

    await page.locator("#username").fill(standartUserCredentials.userName);
    await page.locator("#current-password").fill(standartUserCredentials.password);
    await page.getByRole("button", { name: "Iniciar sesión" }).click();

    use(page);
  },
  headerComponent: async ({ page }, use) => {
    await use(new HeaderComponent(page));
  },
  settingsComponent: async ({ page }, use) => {
    await use(new SettingsComponent(page));
  },
  ordersWidget: async ({ page }, use) => {
    await use(new OrdersWidget(page));
  },
  tradingWidget: async ({ page }, use) => {
    await use(new TradingWidget(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

export { test };
export { expect } from "@playwright/test";
