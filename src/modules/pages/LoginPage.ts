import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { Credentials } from "../interfaces/Credentials";

export class LoginPage extends BasePage {
  readonly userNameInputField: Locator = this.page.locator("[data-test='username']");
  readonly passwordInputField: Locator = this.page.locator("[data-test='password']");
  readonly loginButton: Locator = this.page.locator("[data-test='login-button']");
  readonly errorAlert: Locator = this.page.locator("h3[data-test='error']");

  constructor(readonly page: Page) {
    super(page);
  }

  async submitLogin(): Promise<void> {
    await this.loginButton.click();
  }

  async login(credentials: Credentials): Promise<void> {
    await this.userNameInputField.fill(credentials.userName);
    await this.passwordInputField.fill(credentials.password);
    await this.submitLogin();
  }
}
