import { getAge, MY_BIRTH_DATE } from '../../../src/utils/getAge';
import { getMessageByLanguage, LANGUAGES } from '../../../src/services/languages/languages';

const selectors = {
  homeIntroduction1: '[data-cy=homeIntroduction1]',
  contactSection: '[data-cy=contactSection]',
  aboutMeButton: '[data-cy=aboutMeButton]',
  aboutMeModal: '[data-cy=aboutMeModal]',
  aboutMeModalCloseButton: '[data-cy=aboutMeModal-closeButton]',
};

describe('Home tests', () => {
  it('Should show current age on home introduction', () => {
    const age = getAge(MY_BIRTH_DATE);
    const expectedText = getMessageByLanguage(LANGUAGES.ENG, 'home.introduction.description1', {
      age,
    });

    cy.visit('/');
    cy.get(selectors.homeIntroduction1).contains(expectedText);
  });

  it('Should show a modal when clicking on about me button', () => {
    cy.visit('/');
    cy.get(selectors.aboutMeButton).click();
    cy.get(selectors.aboutMeModal).should('be.visible');
  });

  it('Should close modal when clicking on close button', () => {
    cy.visit('/');
    cy.get(selectors.aboutMeButton).click();
    cy.get(selectors.aboutMeModal).should('be.visible');
    cy.get(selectors.aboutMeModalCloseButton).click();
    cy.get(selectors.aboutMeModal).should('not.exist');
  });

  it('Should close modal when clicking anywhere except the modal', () => {
    cy.visit('/');
    cy.get(selectors.aboutMeButton).click();
    cy.get(selectors.aboutMeModal).should('be.visible');
    cy.get(selectors.aboutMeModal).click();
    cy.get(selectors.aboutMeModal).should('be.visible');

    cy.get(selectors.contactSection).click();
    cy.get(selectors.aboutMeModal).should('not.exist');
  });
});
