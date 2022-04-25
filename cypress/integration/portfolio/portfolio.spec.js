import { getMessageByLanguage, LANGUAGES } from '../../../src/services/languages/languages';
import { CARDS } from '../../../src/components/Portfolio/PortfolioCardsData';

const selectors = {
  portfolioCardDiv: '[data-cy=portfolioCardDiv]',
  portfolioCard: '[data-cy=portfolioCard]',
  portfolioCardDescription: '[data-cy=portfolioCard-description]',
};

const displayedCard = CARDS[0];

describe('Portfolio Cards tests', () => {
  it('Should show correct data', () => {
    cy.visit('/');
    cy.get(selectors.portfolioCardDiv)
      .find(selectors.portfolioCard)
      .contains(getMessageByLanguage(LANGUAGES.ENG, displayedCard.titleKey));
    cy.get(selectors.portfolioCardDiv)
      .find(selectors.portfolioCardDescription)
      .contains(getMessageByLanguage(LANGUAGES.ENG, displayedCard.descriptionKey));
  });

  it('Should redirect to correct link', () => {
    cy.visit('/');
    cy.get(selectors.portfolioCardDiv).find(selectors.portfolioCard).should('have.attr', 'href', displayedCard.repoLink);
  });
});
