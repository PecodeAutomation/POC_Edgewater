import { Locator, Page } from "@playwright/test";

export class BasePage {
  
  constructor(readonly page: Page) {}

  async typeInBlankField(locator: Locator, text: string): Promise<void> {
    await locator.clear();
    await locator.fill(text);
  }
}
