import React from 'react';
import PortfolioCard from './PortfolioCard';
import AwesomeSlider from 'react-awesome-slider';
import { CARDS } from '@components/Portfolio/PortfolioCardsData';
import { useLanguageContext } from '@providers/Language.provider';
import useWindowDimensions from '@hooks/useWindowDimensions';
import 'react-awesome-slider/dist/styles.css';
import './Portfolio.css';

const PortfolioCardDiv = ({ children, href, ...props }) => {
  if (href) {
    return (
      <a {...props} href={href}>
        {children}
      </a>
    );
  }
  return <div {...props}>{children}</div>;
};

const Portfolio = () => {
  const { getMessage } = useLanguageContext();
  const PORTFOLIO_SLIDER_THRESHOLD = 768;
  const { width } = useWindowDimensions();
  const shouldShowSlider = width < PORTFOLIO_SLIDER_THRESHOLD;

  return (
    <section className="portfolio" data-cy="portfolioSection" id="portfolio">
      <h3>{getMessage('portfolio.title')}</h3>
      {shouldShowSlider ? (
        <AwesomeSlider className="slider" organicArrows={false}>
          {CARDS.map(({ descriptionKey, key, onlySkeleton, repoLink, titleKey }) => (
            <div className="portfolioCardDivContainer" key={key}>
              <PortfolioCardDiv
                className="portfolioCardDiv"
                data-cy="portfolioCardDiv"
                href={repoLink}>
                <PortfolioCard
                  description={getMessage(descriptionKey)}
                  onlySkeleton={onlySkeleton}
                  repoLink={repoLink}
                  title={getMessage(titleKey)}
                />
              </PortfolioCardDiv>
            </div>
          ))}
        </AwesomeSlider>
      ) : (
        <div className="portfolioCardsContainer" data-cy="desktopPortfolioCards">
          {CARDS.map(({ descriptionKey, key, onlySkeleton, repoLink, titleKey }) => (
            <PortfolioCardDiv
              className="portfolioCardDiv"
              data-cy="portfolioCardDiv"
              href={repoLink}
              key={key}>
              <PortfolioCard
                description={getMessage(descriptionKey)}
                onlySkeleton={onlySkeleton}
                title={getMessage(titleKey)}
              />
            </PortfolioCardDiv>
          ))}
        </div>
      )}
    </section>
  );
};

export default Portfolio;
