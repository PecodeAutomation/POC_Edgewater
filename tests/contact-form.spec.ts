import { test, expect } from "@fixtures/baseFixture";

test.describe("Form verifications", () => {
  test("Verify required fields", async ({
    page,
    navigationBar,
    contactForm,
  }, testInfo) => {
    await page.goto("/");
    await navigationBar.acceptCookies();
    if (testInfo.project.name === "mobileSafari") {
      await navigationBar.openMenuByToggleButton();
    }
    await navigationBar.openProductsCatalog();
    await navigationBar.openContacPage();

    await expect(contactForm.firstNameInputField).toHaveAttribute("required","");
    await expect(contactForm.lastNameInputField).toHaveAttribute("required","");
    await expect(contactForm.emailInputField).toHaveAttribute("required", "");
    await expect(contactForm.phoneInputField).toHaveAttribute("required", "");
    await expect(contactForm.companyNameInputField).toHaveAttribute("required","");
    await expect(contactForm.regionDropdown).toHaveAttribute("required", "");
    await expect(contactForm.jobRoleDropdown).toHaveAttribute("required", "");
    await expect(contactForm.firmTypeDropdown).toHaveAttribute("required", "");
    await expect(contactForm.messageInputField).not.toHaveAttribute("required","");
  });

  test("Verify alert messages for required fields", async ({
    page,
    navigationBar,
    contactForm,
  }, testInfo) => {
    await page.goto("/");
    await navigationBar.acceptCookies();
    if (testInfo.project.name === "mobileSafari") {
      await navigationBar.openMenuByToggleButton();
    }
    await navigationBar.openProductsCatalog();
    await navigationBar.openContacPage();
    await contactForm.clickToSendForm();

    await expect(contactForm.firstNameFieldAlert).toHaveText(
      "Please complete this required field."
    );
    await expect(contactForm.lastNameFieldAlert).toHaveText(
      "Please complete this required field."
    );
    await expect(contactForm.emailFieldAlert).toHaveText(
      "Please complete this required field."
    );
    await expect(contactForm.phoneFieldAlert).toHaveText(
      "Please complete this required field."
    );
    await expect(contactForm.companyNameFieldAlert).toHaveText(
      "Please complete this required field."
    );
    await expect(contactForm.regionFieldAlert).toHaveText(
      "Please select an option from the dropdown menu."
    );
    await expect(contactForm.jobRoleFieldAlert).toHaveText(
      "Please select an option from the dropdown menu."
    );
    await expect(contactForm.firmTypeFieldAlert).toHaveText(
      "Please select an option from the dropdown menu."
    );
  });

  test("Verify the warning message if an incorrect email address is entered", async ({
    page,
    navigationBar,
    contactForm,
  }, testInfo) => {
    const INVALID_EMAIL: string = "invalid/email";

    await page.goto("/");
    await navigationBar.acceptCookies();
    if (testInfo.project.name === "mobileSafari") {
      await navigationBar.openMenuByToggleButton();
    }
    await navigationBar.openProductsCatalog();
    await navigationBar.openContacPage();
    await contactForm.typeInEmailInputField(INVALID_EMAIL);
    await contactForm.clickToSendForm();

    await expect(contactForm.emailFieldAlert).toHaveText(
      "Email must be formatted correctly."
    );
  });
});
