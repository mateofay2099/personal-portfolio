import React from 'react';
import PortfolioCard from './PortfolioCard';
import AwesomeSlider from 'react-awesome-slider';
import { CARDS } from '@components/Portfolio/PortfolioCardsData';
import { useLanguageContext } from '@providers/Language.provider';
import 'react-awesome-slider/dist/styles.css';
import './Portfolio.css';

const Portfolio = () => {
  const { getMessage } = useLanguageContext();

  return (
    <section className="portfolio" data-cy="portfolioSection" id="portfolio">
      <h2>{getMessage('portfolio.title')}</h2>
      <AwesomeSlider className="slider" organicArrows={false}>
        {CARDS.map(({ descriptionKey, key, onlySkeleton, repoLink, titleKey }) => (
          <div className="portfolioCardDiv" data-cy="portfolioCardDiv" key={key}>
            <PortfolioCard
              description={getMessage(descriptionKey)}
              onlySkeleton={onlySkeleton}
              repoLink={repoLink}
              title={getMessage(titleKey)}
            />
          </div>
        ))}
      </AwesomeSlider>
    </section>
  );
};

export default Portfolio;
