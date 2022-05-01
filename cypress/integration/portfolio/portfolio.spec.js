import { getMessageByLanguage, LANGUAGES } from '@services/languages/languages';
import { CARDS } from '@components/Portfolio/PortfolioCardsData';

const selectors = {
  comingSoonLabel: '[data-cy=comingSoonLabel]',
  desktopPortfolioCards: '[data-cy=desktopPortfolioCards]',
  portfolioCardDiv: '[data-cy=portfolioCardDiv]',
  portfolioCard: '[data-cy=portfolioCard]',
  portfolioCardDescription: '[data-cy=portfolioCard-description]',
};

const testCards = (cardsToTest) => {
  it('Should show correct data', () => {
    cardsToTest.forEach(({ descriptionKey, onlySkeleton, titleKey }, i) => {
      cy.get(selectors.portfolioCardDiv).eq(i).as('currentCard');
      if (onlySkeleton) {
        cy.get('@currentCard').find(selectors.comingSoonLabel).should('be.visible');
        cy.get('@currentCard')
          .find(selectors.comingSoonLabel)
          .contains(getMessageByLanguage(LANGUAGES.ENG, titleKey));
      } else {
        cy.get('@currentCard').find(selectors.comingSoonLabel).should('not.exist');
        cy.get('@currentCard')
          .find(selectors.portfolioCard)
          .contains(getMessageByLanguage(LANGUAGES.ENG, titleKey));
        cy.get('@currentCard')
          .find(selectors.portfolioCardDescription)
          .contains(getMessageByLanguage(LANGUAGES.ENG, descriptionKey));
      }
    });
  });

  it('Should redirect to correct link', () => {
    cardsToTest.forEach(({ onlySkeleton, repoLink }, i) => {
      cy.get(selectors.portfolioCardDiv).eq(i).as('currentCard');
      if (onlySkeleton) {
        cy.get('@currentCard').find(selectors.portfolioCard).should('not.have.attr', 'href');
      } else {
        cy.get('@currentCard').find(selectors.portfolioCard).should('have.attr', 'href', repoLink);
      }
    });
  });
};

describe('Portfolio Cards tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Portfolio Cards tests --Mobile', () => {
    const displayedCard = CARDS[0];

    beforeEach(() => {
      cy.viewport(767, 700);
    });

    it('Should not show slider alternative div', () => {
      cy.get(selectors.desktopPortfolioCards).should('not.exist');
    });

    testCards([displayedCard]);
  });

  describe('Portfolio Cards tests --Desktop', () => {
    beforeEach(() => {
      cy.viewport(768, 700);
    });

    it('Should show slider alternative div', () => {
      cy.get(selectors.desktopPortfolioCards).should('be.visible');
    });

    testCards(CARDS);
  });
});
