import { getAge, MY_BIRTH_DATE } from '@utils/getAge';
import { getMessageByLanguage, LANGUAGES } from '@services/languages/languages';

const selectors = {
  homeIntroduction1: '[data-cy=homeIntroduction1]',
  experienceSection: '[data-cy=experienceSection]',
  aboutMeButton: '[data-cy=aboutMeButton]',
  aboutMeModal: '[data-cy=aboutMeModal]',
  aboutMeModalCloseButton: '[data-cy=aboutMeModal-closeButton]',
  homeMeImg: '[data-cy=homeMeImg]',
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

    cy.get(selectors.experienceSection).click();
    cy.get(selectors.aboutMeModal).should('not.exist');
  });

  it('Should NOT show new home image on smaller screen', () => {
    cy.viewport(767, 700);
    cy.visit('/');
    cy.get(selectors.homeMeImg).should('not.be.visible');
  });

  it('Should show new home image on bigger screen', () => {
    cy.viewport(768, 700);
    cy.visit('/');
    cy.get(selectors.homeMeImg).should('be.visible');
  });
});
