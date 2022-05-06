import React from 'react';
import { useThemeContext } from '@providers/Theming.provider.jsx';

const ExperienceCard = ({ description, Icon, rotateDeg }) => {
  const { currentTheme } = useThemeContext();

  return (
    <div className="experienceCard" data-cy="experienceCard">
      <div className="experienceCardIconDiv">
        <Icon
          className="experienceCardIcon"
          data-cy="experienceCard-image"
          fill={currentTheme.primary}
          style={{ transform: `rotate(${rotateDeg}deg)` }}
        />
      </div>
      <div className="descriptionDiv">
        <p data-cy="experienceCard-description">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
