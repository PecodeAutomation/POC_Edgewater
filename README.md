# POC_Example

Automated e2e tests

### POC is created with:

- Playwright/TypeScript
- Page Object pattern

### How do I get set up?

`npm install`

# Directory structure

- **_tests_** - contains e2e test files 
- **_pages_** - contains the page selectors and uses them to create methods such as create something new, edit something, delete something etc.
- **_fixtures_** - allows to put reusable behavior such as custom commands or global overrides to extended test function that you want applied and available to all of your tests
- _**playwright.config.ts**_ - This file is used to store any configuration values you supply.

# Run the Application

- Run all tests with an open browser

`"npm run pw:headed"`,

- Run all tests without a browser

`"npm run pw:headless"`

- Run tests in UI mode

`"npm run pw:ui"`

- Run all tests on a desktop browser in headed mode

`"pw:headed:chromium"`

- Run all tests on a desktop browser in headless mode

`"pw:headless:chromium"`

- Run all tests on a browser with mobile viewport in headed mode

`"pw:headed:mobile"`

- Run all tests on a browser with mobile viewport in headless mode

`"pw:headless:mobile"`
