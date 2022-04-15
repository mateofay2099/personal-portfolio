import React from 'react';
import './Portfolio.css';

const PortfolioCards = ({ description, onlySkeleton, repoLink, title }) => {
  if (onlySkeleton) {
    return (
      <>
        <div className="fullScreenShadow" />
        <div className="comingSoonLabel">
          <h3>{title}</h3>
        </div>
        <a className="portfolioCard" href={repoLink}>
          <div className="portfolioCardSkeletonDiv">
            <div className="portfolioCardTitleSkeleton1" />
            <div className="portfolioCardTitleSkeleton2" />
          </div>
        </a>
        <div className="portfolioCardDescription">
          <div className="portfolioCardSkeletonDiv">
            <div className="portfolioCardDescriptionSkeleton1" />
            <div className="portfolioCardDescriptionSkeleton2" />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <a className="portfolioCard" href={repoLink}>
        <h3>{title}</h3>
      </a>
      <div className="portfolioCardDescription">
        <p>{description}</p>
      </div>
    </>
  );
};

export default PortfolioCards;
