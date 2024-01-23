// cypress/integration/context-api.spec.js
describe('Context API Demo', () => {
  it('Toggles the theme', () => {
    cy.visit('/');
    cy.get('.app').should('have.class', 'light');
    cy.contains('Toggle Theme').click();
    cy.get('.app').should('have.class', 'dark');
    cy.contains('Current Theme: dark');
  });
});
