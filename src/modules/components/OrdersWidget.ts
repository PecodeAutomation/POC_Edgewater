import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class OrdersWidget extends BasePage {
  readonly cancelAllButton: Locator = this.page.locator('#ordersButtons').getByRole('button', { name: 'Cancel All' });
  readonly allOrdersTab: Locator = this.page.getByRole('button', { name: 'All', exact: true });
  readonly orderCard: Locator = this.page.locator('.panel.order-big[role="tabpanel"]');
  readonly deleteOrderButton: Locator = this.page.locator('.panel.order-big[role="tabpanel"] .panel__action-button');
  readonly requestedAmount: Locator = this.page.locator('div[class="value-block"] span:nth-child(1) span:nth-child(1)');
  readonly actualExchangeRate: Locator = this.page.locator('div[class="value-block"] span:nth-child(2) span:nth-child(3)');

  constructor(readonly page: Page) {
    super(page);
  }

  async openAllOrdersTab(): Promise<void> {
    await this.allOrdersTab.click();
  }

  async cancelAllOrders(): Promise<void> {
    await this.cancelAllButton.click();
  }

  async deleteAllOrders(): Promise<void> {
    let orderCards = this.orderCard;
    let deleteButtons = this.deleteOrderButton;

    while (await orderCards.count() > 0) {
        for (let i = 0; i < await deleteButtons.count(); i++) {
            await deleteButtons.nth(i).click();
        }
        orderCards = this.orderCard;
        deleteButtons = this.deleteOrderButton;
    }
  }
}
