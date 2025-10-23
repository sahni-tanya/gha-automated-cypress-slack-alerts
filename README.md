# gha-automated-cypress-slack-alerts

Automated end-to-end testing with Cypress, GitHub Actions, and Slack notifications.

## Features
- Run Cypress tests automatically on push, pull request, or scheduled events
- Get real-time Slack notifications for test success and failure
- Direct link to workflow run in Slack messages (*Workflow Run: Click to view*)

## Folder Structure
```
├── cypress.config.ts         # Cypress configuration
├── cypress/
│   ├── e2e/                  # Test specs (e.g. sample1.cy.ts)
│   ├── fixtures/             # Test data
│   └── support/              # Custom commands and setup
├── .github/
│   └── workflows/
│       └── cypress-slack.yml # GitHub Actions workflow
├── package.json              # Project config and scripts
├── tsconfig.json             # TypeScript config
├── .gitignore                # Ignore node_modules, logs, Cypress artifacts
└── README.md                 # Project info and setup
```

## Getting Started

1. **Clone the repo**
   ```sh
   git clone <your-repo-url>
   cd gha-automated-cypress-slack-alerts
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Run Cypress locally**
   ```sh
   npx cypress open
   ```
4. **Run tests in CI**
   - Tests run automatically on push/pull request to `main` via GitHub Actions
   - To run a specific test locally:
     ```sh
     npx cypress run --spec cypress/e2e/sample1.cy.ts
     ```

## Slack Integration
- Add your Slack webhook URL as a GitHub secret named `SLACK_WEBHOOK`
- Workflow sends detailed notifications for test success and failure
- Includes branch, commit, actor, workflow, run ID, job, timestamp, and direct *Workflow Run: Click to view* link to workflow run

## Customization
- Edit `cypress.config.ts` for Cypress settings
- Update `.github/workflows/cypress-slack.yml` for workflow and Slack message customization
- Write your tests in `cypress/e2e/`

## Example Slack Notification
```
✅ Cypress test run for sample1.cy.ts succeeded!
Branch: main
Commit: <commit-sha>
Actor: <username>
Workflow: Cypress Tests with Slack Notification
Run ID: <run-id>
Job: cypress-run
Timestamp: <timestamp>
Workflow Run: <https://github.com/<repo>/actions/runs/<run-id>|Click to view>
```
## Different exaple to integerate the Slack Notification

Example 
```
name: Slack Notification
uses: rtCamp/action-slack-notify@v2
```

Another Example 
```
name: Notify Slack 
uses: slackapi/slack-github-action@v1.23.0

```
