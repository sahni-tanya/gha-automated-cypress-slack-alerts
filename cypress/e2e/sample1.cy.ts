// Example test file 1

describe('Sample Successful Test', () => {

  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => { return false; });
  });

  it('test case 1', () => {
    cy.visit('https://docs.cypress.io/');
    cy.get('h1').should('contain.text', 'Why Cypress?');
  });
});
