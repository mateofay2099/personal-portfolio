import React from 'react';
import { useThemeContext } from '@providers/Theming.provider.jsx';
import { ScrollRotate } from 'react-scroll-rotate';

const ExperienceCard = ({ description, Icon, rotateDeg }) => {
  const { currentTheme } = useThemeContext();

  return (
    <div className="experienceCard" data-cy="experienceCard">
      <div className="experienceCardIconDiv">
        <ScrollRotate>
          <Icon
            className="experienceCardIcon"
            data-cy="experienceCard-image"
            fill={currentTheme.primary}
            style={{ transform: `rotate(${rotateDeg}deg)` }}
          />
        </ScrollRotate>
      </div>
      <div className="descriptionDiv">
        <p data-cy="experienceCard-description">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
