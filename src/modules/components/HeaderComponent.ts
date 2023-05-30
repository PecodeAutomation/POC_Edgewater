import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HeaderComponent extends BasePage {
  readonly settingsButton: Locator = this.page.locator("button.settings-button");

  constructor(readonly page: Page) {
    super(page);
  }
}
