import { Locator, Page } from "@playwright/test";

export class BasePage {
  readonly cartButton: Locator = this.page.locator("#shopping_cart_container a");
  readonly cartBadgeIcon: Locator = this.page.locator(".shopping_cart_badge");

  constructor(readonly page: Page) {}

  async typeInBlankField(locator: Locator, text: string): Promise<void> {
    await locator.clear();
    await locator.fill(text);
  }

  async openCart(): Promise<void> {
    await this.cartButton.click();
  }
}
