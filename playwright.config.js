// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({

  testDir: './tests',
  timeout: 30000,
  globalTimeout: 60000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["line"], ["allure-playwright", {outputFolder: "allure-results"}]],
  use: {
    baseURL: 'https://www.redmine.org',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  
});

