import { getMessageByLanguage, LANGUAGES } from '../../../src/services/languages/languages';

const selectors = {
  homeSection: '[data-cy=homeSection]',
  navBarButton: '[data-cy=navBarButton]',
  navBarOptions: '[data-cy=navBarOptions]',
  experienceOption: '[data-cy=navBar-experienceOption]',
  portfolioOption: '[data-cy=navBar-portfolioOption]',
  contactOption: '[data-cy=navBar-contactOption]',
  languageSelector: '[data-cy=navBar-languageSelector]',
  languageSelectorSelectedOption: '[data-cy=navBar-languageSelector] option:selected',
  languageDefaultOption: '[data-cy=languageSelector-defaultOption]',
  englishOption: '[data-cy=languageSelector-englishOption]',
  spanishOption: '[data-cy=languageSelector-spanishOption]',
};

describe('NavBar tests', () => {
  it('Should show a modal with proper navBar options and hide button', () => {
    cy.visit('/');
    cy.get(selectors.navBarButton).click();
    cy.get(selectors.navBarOptions).should('be.visible');
    cy.get(selectors.experienceOption).should('be.visible');
    cy.get(selectors.portfolioOption).should('be.visible');
    cy.get(selectors.contactOption).should('be.visible');
    cy.get(selectors.languageSelector).should('be.visible');

    cy.get(selectors.navBarButton).should('not.be.visible');

  });

  it('Should close options when clicking somewhere other than the selector', () => {
    cy.visit('/');
    cy.get(selectors.navBarButton).click();
    cy.get(selectors.navBarOptions).should('be.visible');
    cy.get(selectors.experienceOption).click();
    cy.url().should('include', '#experience');
    cy.get(selectors.navBarOptions).should('not.exist');

    cy.get(selectors.navBarButton).click();
    cy.get(selectors.homeSection).click();
    cy.get(selectors.navBarOptions).should('not.exist');
  });

  it('Should navigate to correct section based on selected option', () => {
    cy.visit('/');
    cy.get(selectors.navBarButton).click();
    cy.get(selectors.experienceOption).click();
    cy.url().should('include', '#experience');

    cy.get(selectors.navBarButton).click();
    cy.get(selectors.portfolioOption).click();
    cy.url().should('include', '#portfolio');

    cy.get(selectors.navBarButton).click();
    cy.get(selectors.contactOption).click();
    cy.url().should('include', '#contact');
  });

  it('Should show a language selector with correct disabled default option', () => {
    const defaultMessage = getMessageByLanguage(LANGUAGES.ENG, 'home.navBar.selectLanguage');

    cy.visit('/');
    cy.get(selectors.navBarButton).click();
    cy.get(selectors.languageSelectorSelectedOption).should('have.text', defaultMessage);

    cy.get(selectors.languageDefaultOption).should('be.disabled');
  });

  it('Should show options when clicking on select', () => {
    cy.visit('/');
    cy.get(selectors.navBarButton).click();
    cy.get(selectors.languageDefaultOption).should('be.visible');
    cy.get(selectors.englishOption).should('be.visible');
    cy.get(selectors.spanishOption).should('be.visible');
  });

  it('Should select correct language when clicking on select', () => {
    const englishMessage = getMessageByLanguage(LANGUAGES.ENG, 'home.navBar.english');
    const spanishMessage = getMessageByLanguage(LANGUAGES.SPA, 'home.navBar.spanish');
    const ENGLISH_VALUE = 'english';
    const SPANISH_VALUE = 'spanish';

    cy.visit('/');
    cy.get(selectors.navBarButton).click();
    cy.get(selectors.languageSelector).select(ENGLISH_VALUE);
    cy.get(selectors.languageSelector).invoke('val').should('eq', ENGLISH_VALUE);
    cy.get(selectors.languageSelectorSelectedOption).should('have.text', englishMessage);

    cy.get(selectors.languageSelector).select(SPANISH_VALUE);
    cy.get(selectors.languageSelector).invoke('val').should('eq', SPANISH_VALUE);
    cy.get(selectors.languageSelectorSelectedOption).should('have.text', spanishMessage);
  });
});
