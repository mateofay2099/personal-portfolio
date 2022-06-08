import React, { forwardRef } from 'react';
import './Experience.css';
import ExperienceCard from '@components/Experience/ExperienceCard';
import { useLanguageContext } from '@providers/Language.provider';
import { CARDS } from '@components/Experience/ExperienceCardsData';

// eslint-disable-next-line react/display-name
const Experience = forwardRef((_, ref) => {
  const { getMessage } = useLanguageContext();

  return (
    <section className="experience" data-cy="experienceSection" id="experience" ref={ref}>
      <h3>{getMessage('experience.title')}</h3>
      <div className="experienceCardsDiv">
        {CARDS.map(({ AdditionalComponent, descriptionKey, descriptionTextParams, Icon, key }) => (
          <ExperienceCard
            AdditionalComponent={AdditionalComponent}
            customClass={key}
            description={getMessage(descriptionKey, descriptionTextParams)}
            Icon={Icon}
            key={key}
          />
        ))}
      </div>
    </section>
  );
});

export default Experience;
