import React from 'react';

const ExperienceCard = ({ description, icon }) => {
  return (
    <div className="experienceCard" data-cy="experienceCard">
      <img data-cy="experienceCard-image" src={icon} />
      <div className="descriptionDiv">
        <p data-cy="experienceCard-description">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
