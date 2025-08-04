// Example test file 2

describe('Sample Unsuccessful Test', () => {

  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => { return false; });
  });

  it('test case 2', () => {
    cy.visit('https://docs.cypress.io/');
    cy.get('h1').should('not.contain.text', 'Why Cypress?');
  })
});
