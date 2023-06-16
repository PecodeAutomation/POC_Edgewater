import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class TradingWidget extends BasePage {
  readonly selectSymbolDropdown: Locator = this.page.getByTestId('selectSymbol');
  readonly bidButton: Locator = this.page.getByRole('button', { name: 'Bid' });
  readonly orderTypeDropdown: Locator = this.page.getByTestId('order-type');
  readonly orderLifetimeDropdown: Locator = this.page.getByTestId('order-lifetime');
  readonly exchangeRateInputField: Locator = this.page.getByTestId('offer-price_price');
  readonly offerAmmountInputField: Locator = this.page.getByTestId('offer-ammount');
  readonly submitOrderButton: Locator = this.page.getByTestId('submitOrder');
  

  constructor(readonly page: Page) {
    super(page);
  }

  async selectSymbol(symbol: string): Promise<void> {
    await this.selectSymbolDropdown.selectOption(symbol);
  }

  async openBuyForm(): Promise<void> {
    await this.bidButton.click();
  }

  async selectOrderType(orderType: string): Promise<void> {
    await this.orderTypeDropdown.selectOption(orderType);
  }

  async selectOrderLifetime(orderLifetime: string): Promise<void> {
    await this.orderLifetimeDropdown.selectOption(orderLifetime);
  }

  async enterTotalAmount(amount: string): Promise<void> {
    await this.typeInBlankField(this.offerAmmountInputField, amount);
  }

  async getExchangeRateValue(): Promise<string> {
    return this.exchangeRateInputField.inputValue();
  }

  async submitOrder(): Promise<void> {
    await this.submitOrderButton.click();
  }
}
