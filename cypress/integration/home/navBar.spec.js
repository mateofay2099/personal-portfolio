describe('NavBar tests', () => {
  it('Should show a modal with navBar options', () => {
    cy.visit('/');
    cy.get('[data-cy=navBarButton]').click();
    cy.get('[data-cy=navBar-experienceOption]');
  });
});
