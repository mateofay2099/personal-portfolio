import React from 'react';
import PortfolioCard from './PortfolioCard';
import AwesomeSlider from 'react-awesome-slider';
import { CARDS } from '@components/Portfolio/PortfolioCardsData';
import 'react-awesome-slider/dist/styles.css';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <AwesomeSlider className="slider" organicArrows={false}>
        {CARDS.map(({ description, key, onlySkeleton, repoLink, title }) => (
          <div className="portfolioCardDiv" key={key}>
            <PortfolioCard
              description={description}
              onlySkeleton={onlySkeleton}
              repoLink={repoLink}
              title={title}
            />
          </div>
        ))}
      </AwesomeSlider>
    </section>
  );
};

export default Portfolio;
