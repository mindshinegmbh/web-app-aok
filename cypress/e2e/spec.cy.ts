describe('Back Button', () => {
  it('Contains Back button', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('Züruk');
  });
});
