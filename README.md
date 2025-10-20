# DemoQA Playwright Automation
End-to-end tests for [DemoQA](https://demoqa.com) using Playwright and the Page Object Model (POM).

# Running Tests

1. Run all tests:

- `npx playwright test`


2. Run a specific test file:

- `npx playwright test tests/elements.spec.ts`


3. Generate and view an HTML report:

- `npx playwright show-report`

# Project Structure
```
├── .github/
│   └── workflows/          # CI/CD configuration
├── Pages/                  # Page Object Model classes
│   ├── MainPage.ts
│   ├── SettingsPage.ts
│   └── ...
├── tests/                  # Test files
│   ├── smoke.spec.ts
│   └── ...
├── playwright.config.ts    # Playwright configuration
└── README.md
```

# How it works
- POM: Each page class under Pages/ encapsulates element locators and actions.
- Tests: The tests/ folder contains test cases importing these page objects.