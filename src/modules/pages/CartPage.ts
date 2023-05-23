import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CartPage extends BasePage {
  readonly productNames: Locator = this.page.locator(".cart_item .inventory_item_name");
  readonly continueShoppingButton: Locator = this.page.locator("[data-test='continue-shopping']");

  constructor(readonly page: Page) {
    super(page);
  }

  async clickToContinueShopping(): Promise<void> {
    await this.continueShoppingButton.click();
  }
}
