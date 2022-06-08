import React from 'react';
import { useThemeContext } from '@providers/Theming.provider.jsx';
import { ScrollRotate } from 'react-scroll-rotate';

const ExperienceCard = ({ AdditionalComponent, customClass, description, Icon }) => {
  const { currentTheme } = useThemeContext();

  return (
    <div className="experienceCard" data-cy="experienceCard">
      <div className="experienceCardIconDiv">
        <ScrollRotate>
          <Icon
            className={`experienceCardIcon ${customClass}-icon`}
            data-cy="experienceCard-image"
            fill={currentTheme.primary}
          />
        </ScrollRotate>
      </div>
      <div className="cardContent" data-cy={`${customClass}-content`}>
        <div className="descriptionDiv">
          <p data-cy="experienceCard-description">{description}</p>
        </div>
        {AdditionalComponent && <AdditionalComponent cardKey={customClass} />}
      </div>
    </div>
  );
};

export default ExperienceCard;
