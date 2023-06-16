import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SettingsComponent extends BasePage {
  readonly designTab: Locator = this.page.getByRole('button', { name: 'Design' });
  readonly defaultLayoutButton: Locator = this.page.getByRole('button', { name: 'Default Layout' });

  constructor(readonly page: Page) {
    super(page);
  }

  async openDesignTab(): Promise<void> {
    await this.designTab.click();
  }

  async setDefaultLayout() {
    await Promise.all([
      this.page.waitForEvent("load", { timeout: 40000 }),
      this.defaultLayoutButton.click(),
      this.confirmButton.click()
    ]);
  }
}
