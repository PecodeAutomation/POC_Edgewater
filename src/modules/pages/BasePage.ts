import { Locator, Page } from "@playwright/test";

export class BasePage {
  readonly acceptCookiesButton: Locator = this.page.getByRole("button", {
    name: "Accept All",
  });

  constructor(readonly page: Page) {}

  async acceptCookies(): Promise<void> {
    await this.acceptCookiesButton.click();
  }

  async typeInBlankField(locator: Locator, text: string): Promise<void> {
    await locator.clear();
    await locator.fill(text);
  }
}
