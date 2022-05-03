import { contactOptions } from '@components/Footer/Footer';
import { customizeInputs } from '@components/Footer/CustomizeModal';
import { getMessageByLanguage, LANGUAGES } from '@services/languages/languages';
import { appTheme } from '@services/theming/ThemesDefinition';

const selectors = {
  footer: '[data-cy=footer]',
  homeSection: '[data-cy=homeWithNavbarSection]',
  customizeButton: '[data-cy=customizeButton]',
  customizeModal: '[data-cy=customizeModal]',
  customizeModalCloseButton: '[data-cy=customizeModal-closeButton]',
  contactOption: (option) => `[data-cy=contactOption-${option}]`,
  customizeInput: (themeKey) => `[data-cy=customizeInput-${themeKey}]`,
  customizeInputLabel: (themeKey) => `[data-cy=customizeInputLabel-${themeKey}]`,
  colorPicker: (themeKey) => `[data-cy=colorPicker-${themeKey}]`,
};

describe('Footer tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should display contact options with correct data and links', () => {
    cy.get(selectors.footer).within(($footer) => {
      contactOptions.forEach(({ className, displayName, href }) => {
        cy.get($footer).find(selectors.contactOption(className)).should('have.attr', 'href', href);
        cy.get($footer).find(selectors.contactOption(className)).contains(displayName);
      });
    });
  });

  it('Should show a modal when clicking on customize button', () => {
    cy.get(selectors.customizeModal).should('not.exist');
    cy.get(selectors.customizeButton).click();
    cy.get(selectors.customizeModal).should('be.visible');
  });

  it('Should NOT show modal when clicking outside or on close button', () => {
    cy.get(selectors.customizeModal).should('not.exist');
    cy.get(selectors.customizeButton).click();
    cy.get(selectors.customizeModal).should('be.visible');

    cy.get(selectors.homeSection).click();
    cy.get(selectors.customizeModal).should('not.exist');

    cy.get(selectors.customizeButton).click();
    cy.get(selectors.customizeModal).should('be.visible');

    cy.get(selectors.customizeModalCloseButton).click();
    cy.get(selectors.customizeModal).should('not.exist');
  });

  it('Should show modal with correct inputs and initialValues', () => {
    cy.get(selectors.customizeButton).click();

    customizeInputs.forEach(({ labelKey, themeKey }) => {
      cy.get(selectors.customizeInputLabel(themeKey)).contains(
        getMessageByLanguage(LANGUAGES.ENG, labelKey)
      );
      cy.get(selectors.customizeInput(themeKey)).should(
        'have.value',
        appTheme[themeKey].toLowerCase()
      );
    });
  });
});
