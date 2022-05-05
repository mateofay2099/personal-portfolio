Cypress.Commands.add('clickOutside', function (outsideDivSelector = 'body') {
  return cy.get(outsideDivSelector).click(0, 0);
});
