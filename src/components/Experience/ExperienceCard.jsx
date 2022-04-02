import React from 'react';

const ExperienceCard = ({ description, icon }) => {
  return (
    <div className="experienceCard">
      <img src={icon} />
      <div className="descriptionDiv">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
