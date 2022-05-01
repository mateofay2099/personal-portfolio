import { getMessageByLanguage, LANGUAGES } from '@services/languages/languages';
import { CARDS } from '@components/Experience/ExperienceCardsData';

const selectors = {
  experienceSection: '[data-cy=experienceSection]',
  experienceCard: '[data-cy=experienceCard]',
  experienceCardDescription: '[data-cy=experienceCard-description]',
  experienceCardImage: '[data-cy=experienceCard-image]',
};

describe('Experience Cards tests', () => {
  it('Should show correct amount of cards', () => {
    cy.visit('/');
    cy.get(selectors.experienceSection)
      .find(selectors.experienceCard)
      .should('have.length', CARDS.length);
  });

  it('Should show correct data', () => {
    cy.visit('/');
    CARDS.forEach(({ descriptionKey }, i) => {
      cy.get(selectors.experienceSection)
        .find(selectors.experienceCard)
        .eq(i)
        .within(() => {
          cy.get(selectors.experienceCardImage).should('be.visible');
          cy.get(selectors.experienceCardDescription).contains(
            getMessageByLanguage(LANGUAGES.ENG, descriptionKey)
          );
        });
    });
  });
});
