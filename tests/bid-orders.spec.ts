import { faker } from "@faker-js/faker";
import { test, expect } from "@fixtures/baseFixture";
import { ORDER_LIFETIME, ORDER_TYPE, SYMBOLS } from "src/modules/data/options-data";

test.describe.configure({ mode: "serial"});

test.describe("Bid Orders tests", () => {
 
  test.beforeEach(async ({ headerComponent, settingsComponent, ordersWidget }) => {
    await headerComponent.openSettings();
    await settingsComponent.openDesignTab();
    await settingsComponent.setDefaultLayout();
    await ordersWidget.openAllOrdersTab();
    await ordersWidget.cancelAllOrders();
    await ordersWidget.deleteAllOrders();
  });

  test("Bid order TOP Limit AUD/USD - Requested amount", async ({
    tradingWidget,
    ordersWidget,
  }) => {
    const AMOUNT: string = faker.random.numeric(2);

    await tradingWidget.selectSymbol(SYMBOLS.aud_usd);
    await tradingWidget.openBuyForm();
    await tradingWidget.selectOrderType(ORDER_TYPE.limit);
    await tradingWidget.selectOrderLifetime(ORDER_LIFETIME.gtc);
    await tradingWidget.enterTotalAmount(AMOUNT);
    await tradingWidget.submitOrder(); // XXX: to auto-populate Exchange Rate
    await tradingWidget.submitOrder();

    await expect(ordersWidget.requestedAmount).toContainText(AMOUNT);
  });

});
