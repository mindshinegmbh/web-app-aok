import rgbHex from 'rgb-hex';

describe('First Page', () => {
  it('visit first page of app', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('Züruk');
  });
});

describe('Settings page', () => {
  it('Verify Settings page open and settings click works', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('Züruk');
    cy.contains('Home Page').should('be.visible');
    cy.get('[alt="setting link"]').click();
    cy.url().should('include', '/settings');
    cy.contains('Trainingsfortschritt').should('be.visible');
    cy.contains('Dark Mode').should('be.visible');
    cy.contains('Large Text').should('be.visible');
    cy.contains('Barrierefreiheit').should('be.visible');
  });

  it('Verify Dark mode work', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('Züruk');
    cy.contains('Home Page').should('be.visible');
    cy.get('[alt="setting link"]').click();
    cy.url().should('include', '/settings');
    cy.get('[alt="dark mode link disabled"]').click();
    cy.get('[data-testid="dark mode"]')
      .invoke('css', 'color')
      .then((color) => {
        expect(rgbHex(color)).to.eq('91f54a');
      });

    cy.get('[alt="dark mode link enabled"]').click();
    cy.get('[data-testid="dark mode"]')
      .invoke('css', 'color')
      .then((color) => {
        expect(rgbHex(color)).to.eq('91f54a');
      });
    cy.get('[data-testid="settings background"]')
      .invoke('css', 'background-color')
      .then((color) => {
        expect(rgbHex(color)).to.eq('005e3f');
      });
  });

  it('Verify Large Test mode work', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('Züruk');
    cy.contains('Home Page').should('be.visible');
    cy.get('[alt="setting link"]').click();
    cy.url().should('include', '/settings');
    cy.get('[alt="large text mode link disabled"]').click();
    cy.get('[data-testid="large text"]')
      .invoke('css', 'font-size')
      .then((fontSize) => {
        expect(fontSize).to.eq('20px');
      });

    cy.get('[alt="large text mode link enabled"]').click();
    cy.get('[data-testid="large text"]')
      .invoke('css', 'font-size')
      .then((color) => {
        expect(color).to.eq('17px');
      });
    cy.contains('Züruk').click();
    cy.contains('Home Page').should('be.visible');
  });
});
