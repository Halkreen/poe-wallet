import { getGreeting } from '../support/app.po';

describe('poe-wallet', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.percySnapshot('Homepage test')
  });

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome to poe-wallet!');
  });
});
