import { getMessageByLanguage, LANGUAGES } from '@services/languages/languages';

const selectors = {
  homeSection: '[data-cy=homeWithNavbarSection]',
  navBarButton: '[data-cy=navBarButton]',
  navBarOptions: '[data-cy=navBarOptions]',
  activeNavBarOptions: '[data-cy=navBarOptionsactive]',
  experienceOption: '[data-cy=navBar-experienceOption]',
  portfolioOption: '[data-cy=navBar-portfolioOption]',
  languageSelector: '[data-cy=navBar-languageSelector]',
  languageSelectorSelectedOption: '[data-cy=navBar-languageSelector] option:selected',
  languageDefaultOption: '[data-cy=languageSelector-defaultOption]',
  englishOption: '[data-cy=languageSelector-englishOption]',
  spanishOption: '[data-cy=languageSelector-spanishOption]',
};

const navBarOptionsTests = {
  'Should navigate to correct section based on selected option': () => {
    cy.get(selectors.experienceOption).click();
    cy.location('hash').should('eq', '#experience');

    cy.get('@optionsContainer').click();
    cy.get(selectors.portfolioOption).click();
    cy.location('hash').should('eq', '#portfolio');
  },
  'Should show a language selector with correct disabled default option': () => {
    const defaultMessage = getMessageByLanguage(LANGUAGES.ENG, 'home.navBar.selectLanguage');

    cy.get(selectors.languageSelectorSelectedOption).should('have.text', defaultMessage);

    cy.get(selectors.languageDefaultOption).should('be.disabled');
  },
  'Should show options when clicking on select': () => {
    cy.get(selectors.languageDefaultOption).should('be.visible');
    cy.get(selectors.englishOption).should('be.visible');
    cy.get(selectors.spanishOption).should('be.visible');
  },
  'Should select correct language when clicking on select': () => {
    const englishMessage = getMessageByLanguage(LANGUAGES.ENG, 'home.navBar.english');
    const spanishMessage = getMessageByLanguage(LANGUAGES.SPA, 'home.navBar.spanish');
    const ENGLISH_VALUE = 'english';
    const SPANISH_VALUE = 'spanish';

    cy.get(selectors.languageSelector).select(ENGLISH_VALUE);
    cy.get(selectors.languageSelector).invoke('val').should('eq', ENGLISH_VALUE);
    cy.get(selectors.languageSelectorSelectedOption).should('have.text', englishMessage);

    cy.get(selectors.languageSelector).select(SPANISH_VALUE);
    cy.get(selectors.languageSelector).invoke('val').should('eq', SPANISH_VALUE);
    cy.get(selectors.languageSelectorSelectedOption).should('have.text', spanishMessage);
  },
};

describe('NavBar tests --Mobile', () => {
  beforeEach(() => {
    cy.viewport(767, 700);
    cy.visit('/');
    cy.get(selectors.navBarButton).as('optionsContainer');
  });

  it('Should show a modal with proper navBar options', () => {
    cy.get('@optionsContainer').click();
    cy.get(selectors.activeNavBarOptions).within((navBarOptions) => {
      cy.get(navBarOptions).find(selectors.experienceOption).should('be.visible');
      cy.get(navBarOptions).find(selectors.portfolioOption).should('be.visible');
      cy.get(navBarOptions).find(selectors.languageSelector).should('be.visible');
    });
  });

  it('Should close options when clicking somewhere other than the selector', () => {
    cy.get('@optionsContainer').click();
    cy.get(selectors.activeNavBarOptions).should('be.visible');
    cy.get(selectors.experienceOption).click();
    cy.location('hash').should('eq', '#experience');
    cy.get(selectors.activeNavBarOptions).should('not.exist');

    cy.get('@optionsContainer').click();
    cy.get(selectors.activeNavBarOptions).should('be.visible');
    cy.clickOutside();
    cy.get(selectors.activeNavBarOptions).should('not.exist');
  });

  describe('NavBar options tests --Mobile', () => {
    beforeEach(() => {
      cy.get('@optionsContainer').click();
    });

    Object.entries(navBarOptionsTests).map(([testName, test]) => {
      it(testName, test);
    });
  });
});

describe('NavBar tests --Desktop', () => {
  beforeEach(() => {
    cy.viewport(768, 700);
    cy.visit('/');
  });

  it('Should display options with no navBar button', () => {
    cy.get(selectors.experienceOption).should('be.visible');
    cy.get(selectors.portfolioOption).should('be.visible');
    cy.get(selectors.languageSelector).should('be.visible');

    cy.get(selectors.navBarButton).should('not.be.visible');
  });

  describe('NavBar options tests --Desktop', () => {
    beforeEach(() => {
      cy.get(selectors.homeSection).as('optionsContainer');
    });

    Object.entries(navBarOptionsTests).map(([testName, test]) => {
      it(testName, test);
    });
  });
});
