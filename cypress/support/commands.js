Cypress.Commands.add('clickOutside', function () {
  return cy.get('body').click(0, 0);
});
