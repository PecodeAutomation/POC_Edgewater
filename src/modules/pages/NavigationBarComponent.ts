import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class NavigationBarComponent extends BasePage {
  readonly productsLinkButton: Locator = this.page.getByRole("link", {
    name: "Products",
  });
  readonly edgeFxLinkButton: Locator = this.page.getByRole("link", {
    name: "EdgeFX",
    exact: true,
  });
  readonly marketsLinkButton: Locator = this.page
    .getByRole("navigation")
    .getByRole("link", { name: "Markets" });
  readonly contactLinkButton: Locator = this.page
    .getByRole("navigation")
    .getByRole("link", { name: "Contact" });
  readonly menuToggleButton: Locator = this.page.getByRole("button", {
    name: "Menu Toggle",
  });

  constructor(readonly page: Page) {
    super(page);
  }

  async openProductsCatalog(): Promise<void> {
    await this.productsLinkButton.click();
  }

  async openMenuByToggleButton(): Promise<void> {
    await this.menuToggleButton.click();
  }

  async openEdgeFxPage(): Promise<void> {
    await Promise.all([
      this.edgeFxLinkButton.click(),
      this.page.waitForURL("**/edgefx/"),
    ]);
  }

  async openMarketsPage(): Promise<void> {
    await Promise.all([
      this.marketsLinkButton.click(),
      this.page.waitForURL("**/markets/"),
    ]);
  }

  async openContacPage(): Promise<void> {
    await Promise.all([
      this.contactLinkButton.click(),
      this.page.waitForURL("**/contact/"),
    ]);
  }
}
