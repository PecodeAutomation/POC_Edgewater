import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ContactFormComponent extends BasePage {
  readonly sendFormButton: Locator = this.page.getByRole("button", {
    name: "Send Now",
  });
  readonly firstNameInputField: Locator = this.page.getByLabel("First Name*");
  readonly lastNameInputField: Locator = this.page.getByLabel("Last Name*");
  readonly emailInputField: Locator = this.page.getByLabel("Email*");
  readonly phoneInputField: Locator = this.page.getByLabel("Phone*");
  readonly companyNameInputField: Locator =
    this.page.getByLabel("Company Name*");
  readonly regionDropdown: Locator = this.page.getByRole("combobox", {
    name: "Region*",
  });
  readonly jobRoleDropdown: Locator = this.page.getByRole("combobox", {
    name: "Job Role*",
  });
  readonly firmTypeDropdown: Locator = this.page.getByRole("combobox", {
    name: "Firm Type*",
  });
  readonly messageInputField: Locator = this.page.getByLabel("Message");
  readonly edgeFxProductCheckbox: Locator = this.page.getByLabel("EDGEFX", {
    exact: true,
  });
  readonly edgeFxCustomProductCheckbox: Locator =
    this.page.getByLabel("EDGEFX CUSTOM");
  readonly firstNameFieldAlert: Locator = this.page.locator(
    "div.hs-firstname ul.hs-error-msgs label.hs-error-msg"
  );
  readonly lastNameFieldAlert: Locator = this.page.locator(
    "div.hs-lastname ul.hs-error-msgs label.hs-error-msg"
  );
  readonly emailFieldAlert: Locator = this.page.locator(
    "div.hs-email ul.hs-error-msgs label.hs-error-msg"
  );
  readonly phoneFieldAlert: Locator = this.page.locator(
    "div.hs-phone ul.hs-error-msgs label.hs-error-msg"
  );
  readonly companyNameFieldAlert: Locator = this.page.locator(
    "div.hs-company ul.hs-error-msgs label.hs-error-msg"
  );
  readonly regionFieldAlert: Locator = this.page.locator(
    "div.hs-region ul.hs-error-msgs label.hs-error-msg"
  );
  readonly jobRoleFieldAlert: Locator = this.page.locator(
    "div.hs-job_role ul.hs-error-msgs label.hs-error-msg"
  );
  readonly firmTypeFieldAlert: Locator = this.page.locator(
    "div.hs-firm_type ul.hs-error-msgs label.hs-error-msg"
  );

  constructor(readonly page: Page) {
    super(page);
  }

  async clickToSendForm(): Promise<void> {
    await this.sendFormButton.click();
  }

  async typeInEmailInputField(text: string): Promise<void> {
    await this.typeInBlankField(this.emailInputField, text);
  }
}
