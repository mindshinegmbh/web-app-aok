describe('First Page', () => {
  it('visit first page of app', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('Züruk')
  });
});


describe('Settings page', () => {
  it('Verify Settings page and interactions', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('Züruk').click()
    cy.url().should('include', '/settings')
    // cy.get('[data-testid="settings_link"]').should('be.visible')
    // cy.get('[data-cy=settings_link]').should('not.exists')

  });
});
