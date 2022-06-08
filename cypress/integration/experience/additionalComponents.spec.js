import { getMessageByLanguage, LANGUAGES } from '@services/languages/languages';
import { CARDS } from '@components/Experience/ExperienceCardsData';
import GROUPED_COURSES from '@components/Experience/AdditionalComponents/Courses/coursesData';
import TECHNOLOGIES from '@components/Experience/AdditionalComponents/Technologies/technologiesData';

const selectors = {
  experienceSection: '[data-cy=experienceSection]',
  additionalComponent: (cardKey) => `[data-cy=${cardKey}-additionalComponent]`,
  coursesAdditionalComponent: '[data-cy=experienceCards-courses-additionalComponent]',
  technologiesAdditionalComponent: '[data-cy=experienceCards-fullstack-additionalComponent]',
  coursesModal: '[data-cy=coursesModal]',
  coursesModalTitle: '[data-cy=coursesModal-title]',
  coursesModalSubtitles: (key) => `[data-cy=${key}-title]`,
  coursesModalCloseButton: '[data-cy=coursesModal-closeButton]',
  technologiesModal: '[data-cy=technologiesModal]',
  technologiesModalTitle: '[data-cy=technologiesModal-title]',
  technologiesModalCloseButton: '[data-cy=technologiesModal-closeButton]',
  customListItem: '[data-cy=customListItem]',
  customSubItem: '[data-cy=customListItem-subItem]',
};

describe('Experience Cards - Additional Components tests', () => {
  it('Should show additional component message on cards', () => {
    cy.visit('/');
    CARDS.filter(({ AdditionalComponent }) => !!AdditionalComponent).forEach(({ key }) => {
      cy.get(selectors.experienceSection)
        .find(selectors.additionalComponent(key))
        .should('have.length', 1)
        .should('be.visible');
    });
  });

  describe('Courses and Certifications additional component', () => {
    it('Should show modal when clicking on additional component', () => {
      cy.visit('/');
      cy.get(selectors.coursesAdditionalComponent).click();
      cy.get(selectors.coursesModal).should('be.visible');
    });

    it('Should close modal when clicking close button or outside the modal', () => {
      cy.visit('/');
      cy.get(selectors.coursesAdditionalComponent).click();
      cy.get(selectors.coursesModal).should('be.visible');
      cy.get(selectors.coursesModalCloseButton).click();
      cy.get(selectors.coursesModal).should('not.exist');

      cy.get(selectors.coursesAdditionalComponent).click();
      cy.get(selectors.coursesModal).should('be.visible');
      cy.clickOutside();
      cy.get(selectors.coursesModal).should('not.exist');
    });

    it('Should show correct data on modal', () => {
      cy.visit('/');
      cy.get(selectors.coursesAdditionalComponent).click();
      cy.get(selectors.coursesModal).should('be.visible');
      cy.get(selectors.coursesModalTitle).should('be.visible');
      GROUPED_COURSES.forEach(({ title, key, courses }) => {
        if (title) {
          cy.get(selectors.coursesModal).find(selectors.coursesModalSubtitles(key)).contains(title);
        }
        courses.forEach(({ courseKey, subItems }) => {
          cy.get(selectors.coursesModal)
            .find(selectors.customListItem)
            .contains(getMessageByLanguage(LANGUAGES.ENG, courseKey));
          if (subItems && subItems.length > 0) {
            subItems.forEach(({ descriptionKey }) => {
              cy.get(selectors.coursesModal)
                .find(selectors.customSubItem)
                .contains(getMessageByLanguage(LANGUAGES.ENG, descriptionKey));
            });
          }
        });
      });
    });
  });

  describe('Technologies additional component', () => {
    it('Should show modal when clicking on additional component', () => {
      cy.visit('/');
      cy.get(selectors.technologiesAdditionalComponent).click();
      cy.get(selectors.technologiesModal).should('be.visible');
    });

    it('Should close modal when clicking close button or outside the modal', () => {
      cy.visit('/');
      cy.get(selectors.technologiesAdditionalComponent).click();
      cy.get(selectors.technologiesModal).should('be.visible');
      cy.get(selectors.technologiesModalCloseButton).click();
      cy.get(selectors.technologiesModal).should('not.exist');

      cy.get(selectors.technologiesAdditionalComponent).click();
      cy.get(selectors.technologiesModal).should('be.visible');
      cy.clickOutside();
      cy.get(selectors.technologiesModal).should('not.exist');
    });

    it('Should show correct data on modal', () => {
      cy.visit('/');
      cy.get(selectors.technologiesAdditionalComponent).click();
      cy.get(selectors.technologiesModal).should('be.visible');
      cy.get(selectors.technologiesModalTitle).should('be.visible');
      TECHNOLOGIES.forEach(({ description, subItems }) => {
        cy.get(selectors.technologiesModal).find(selectors.customListItem).contains(description);
        if (subItems && subItems.length > 0) {
          subItems.forEach(({ description }) => {
            cy.get(selectors.technologiesModal).find(selectors.customSubItem).contains(description);
          });
        }
      });
    });
  });
});
