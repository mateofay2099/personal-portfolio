import React from 'react';
import './Experience.css';
import ExperienceCard from '@components/Experience/ExperienceCard';
import { useLanguageContext } from '@providers/Language.provider';
import { CARDS } from '@components/Experience/ExperienceCardsData';

const Experience = () => {
  const { getMessage } = useLanguageContext();

  return (
    <section className="experience" data-cy="experienceSection" id="experience">
      <h2>{getMessage('experience.title')}</h2>
      <div className="experienceCardsDiv">
        {CARDS.map(({ descriptionKey, icon, key }) => (
          <ExperienceCard description={getMessage(descriptionKey)} icon={icon} key={key} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
