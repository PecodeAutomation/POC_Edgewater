import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductsPage extends BasePage {
  readonly productsPageTitle: Locator = this.page.locator(".title");
  readonly productSortContainer: Locator = this.page.locator("[data-test='product_sort_container']");
  readonly productNames: string = ".inventory_item_name"
  readonly productPrices: string = ".inventory_item_price"

  constructor(readonly page: Page) {
    super(page);
  }

  async addSpecificProductToCart(productName: string): Promise<void> {
   await this.page.locator("div.inventory_item_description")
    .filter({ has: this.page.locator(`${this.productNames}:has-text("${productName}")`) })
    .getByRole("button", { name: "Add to cart" }).click();
  }

  async sortBy(filer: string): Promise<void> {
    await this.productSortContainer.selectOption({ label: filer });
  }

  async getAndSortProductNames(sortOption: string): Promise<string[]> {
    await this.sortBy(sortOption);
    const productNamesAfterSort = await this.page.locator(`${this.productNames}`).allInnerTexts();
  
    return productNamesAfterSort;
  }

  async getAndSortProductPrices(sortOption: string): Promise<number[]> {
    await this.sortBy(sortOption);
    const productPricesAfterSortStrings = await this.page.locator(`${this.productPrices}`).allInnerTexts();
    const productPricesAfterSort = productPricesAfterSortStrings.map(price => parseFloat(price.replace('$', '')));
  
    return productPricesAfterSort;
  }
  
  compareArrays(expectedSortedArray: string[] | number[], actualSortedArray: string[] | number[]): boolean {
    for (let i = 0; i < expectedSortedArray.length; i++) {
      if (expectedSortedArray[i] !== actualSortedArray[i]) {
        return false;
      }
    }
    return true;
  }
  
  async testSortByAZ(): Promise<boolean> {
    const productNamesAfterSort = await this.getAndSortProductNames("Name (A to Z)");
    const expectedSortedNames = [...productNamesAfterSort].sort();
  
    return this.compareArrays(expectedSortedNames, productNamesAfterSort);
  }
  
  async testSortByZA(): Promise<boolean> {
    const productNamesAfterSort = await this.getAndSortProductNames("Name (Z to A)");
    const expectedSortedNames = [...productNamesAfterSort].sort().reverse();
  
    return this.compareArrays(expectedSortedNames, productNamesAfterSort);
  }

  async testSortPriceLowHigh(): Promise<boolean> {
    const productPricesAfterSort = await this.getAndSortProductPrices("Price (low to high)");
    const expectedSortedPrices = [...productPricesAfterSort].sort((a, b) => a - b);
  
    return this.compareArrays(expectedSortedPrices, productPricesAfterSort);
  }
  
  async testSortPriceHighLow(): Promise<boolean> {
    const productPricesAfterSort = await this.getAndSortProductPrices("Price (high to low)");
    const expectedSortedPrices = [...productPricesAfterSort].sort((a, b) => b - a);
  
    return this.compareArrays(expectedSortedPrices, productPricesAfterSort);
  }
}
