import { test as baseTest } from "@playwright/test";
import { NavigationBarComponent } from "../pages/NavigationBarComponent";
import { ContactFormComponent } from "../pages/ContactFormComponent";

const test = baseTest.extend<{
  navigationBar: NavigationBarComponent;
  contactForm: ContactFormComponent;
}>({
  navigationBar: async ({ page }, use) => {
    await use(new NavigationBarComponent(page));
  },
  contactForm: async ({ page }, use) => {
    await use(new ContactFormComponent(page));
  },
});

export { test };
export { expect } from "@playwright/test";
