import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { Credentials } from "../interfaces/Credentials";

export class LoginPage extends BasePage {
  readonly userNameInputField: Locator = this.page.locator("#username");
  readonly passwordInputField: Locator = this.page.locator("#current-password");
  readonly loginButton: Locator = this.page.getByRole("button", { name: "Iniciar sesión" });
  readonly errorAlert: Locator = this.page.locator("[role='alert'].error");

  constructor(readonly page: Page) {
    super(page);
  }

  async login(credentials: Credentials): Promise<void> {
    await this.userNameInputField.fill(credentials.userName);
    await this.passwordInputField.fill(credentials.password);
    await this.loginButton.click();
  }
}
