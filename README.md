# Playwright Test Automation Project for Redmine.org

This repository contains automated test-cases for web applications using [Playwright](https://playwright.dev/). 
The tests are designed to run on the Chromium browser, and results are captured using Allure Reports.

## Project Structure

The repository is organized as follows:

├── .github/workflows              # GitHub Actions workflow files for CI/CD pipeline
├── allure-report                  # Contains the generated Allure report files
├── allure-results                 # Stores the test execution results used to generate reports
├── pages                          # Page Object Models (POM) for different web pages
├── tests                          # Test files
├── .gitignore                     # Contains files that git should ignore
├── Redmine_test-cases.xlsx        # Excel file mapping test cases from Redmine
├── package-lock.json              # Automatically generated file for locking dependencies
├── package.json                   # Node.js project file for dependencies and scripts
├── playwright.config.js           # Configuration file for Playwright
├── pipeline.bat                   # Batch file for running tests in a pipeline

## Setup

### Prerequisites

Before you begin, make sure you have the following installed on your machine:

- **Node.js** (v14 or later)
- **npm** (comes with Node.js)
- **Playwright Browsers**

### Installation

To set up the project locally, follow these steps:

1. **Clone the Repository**
   
git clone https://github.com/Lifencev/Redmine.git

2. **Navigate to the Project Directory**

cd your-directory

3. **Install Playwright**
   
npx playwright install

### Running Tests

1. **Run Tests and create a report via .bat file**

./pipeline.bat

2. **Open Allure Report**

npm run open
