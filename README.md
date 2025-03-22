# Coding Quiz Application

## Description

The **Coding Quiz Application** is a full-stack application designed to test users' coding knowledge through a series of multiple-choice questions. This project emphasizes **Continuous Integration (CI)** and **Continuous Deployment (CD)** using **GitHub Actions** for automated testing and deployment. The application is built with a React frontend, an Express/MongoDB backend, and uses Cypress for component and end-to-end testing.

---

## Deployed Site


## Features

- **Frontend**: Built with React and Vite, styled with Bootstrap.
- **Backend**: Powered by Express and MongoDB for question storage and retrieval.
- **Testing**: Cypress is used for both component and end-to-end testing.
- **CI/CD Pipeline**: GitHub Actions automate testing and deployment workflows.

---

## GitHub Workflows

This project uses **GitHub Actions** to automate testing and deployment. Below are the workflows configured for this application:

### 1. **Cypress Component Tests**
- **Workflow File**: [`.github/workflows/develop_tests.yml`](.github/workflows/develop_tests.yml)
- **Trigger**: Runs when a pull request is made to the `develop` branch.
- **Purpose**: Ensures that all React components are functioning correctly before merging new features.
- **Steps**:
  1. Checkout the code.
  2. Set up the Node.js environment.
  3. Install dependencies.
  4. Run Cypress component tests using the `test-component` script.

#### Example Command:
```bash
npm run test-component
