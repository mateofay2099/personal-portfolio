import React from 'react';
import './Portfolio.css';

const PortfolioCards = ({ description, onlySkeleton, title }) => {
  if (onlySkeleton) {
    return (
      <>
        <div className="comingSoonLabel" data-cy="comingSoonLabel">
          <div className="comingSoonLabelShimmerDiv shimmer">
            <h3>{title}</h3>
          </div>
        </div>
        <div className="portfolioCard shadow" data-cy="portfolioCard">
          <div className="portfolioCardSkeletonDiv">
            <div className="portfolioCardTitleSkeleton1 shimmer" />
            <div className="portfolioCardTitleSkeleton2 shimmer" />
          </div>
        </div>
        <div className="portfolioCardDescription shadow">
          <div className="portfolioCardSkeletonDiv">
            <div className="portfolioCardDescriptionSkeleton1 shimmer" />
            <div className="portfolioCardDescriptionSkeleton2 shimmer" />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="portfolioCard" data-cy="portfolioCard">
        <h3>{title}</h3>
      </div>
      <div className="portfolioCardDescription" data-cy="portfolioCard-description">
        <p>{description}</p>
      </div>
    </>
  );
};

export default PortfolioCards;
