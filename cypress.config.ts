import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://docs.cypress.io/',
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
    supportFile: 'cypress/support/index.ts',
  },
  video: false,
});
