import React, { useState, useEffect } from 'react';
import './Experience.css';
import ExperienceCard from '@components/Experience/ExperienceCard';
import { useLanguageContext } from '@providers/Language.provider';
import { CARDS } from '@components/Experience/ExperienceCardsData';

const Experience = () => {
  const { getMessage } = useLanguageContext();
  const [rotateDeg, setRotateDeg] = useState(0);

  useEffect(() => {
    window.onscroll = function () {
      setRotateDeg(window.pageYOffset / 2);
    };
  }, []);

  return (
    <section className="experience" data-cy="experienceSection" id="experience">
      <h2>{getMessage('experience.title')}</h2>
      <div className="experienceCardsDiv">
        {CARDS.map(({ descriptionKey, descriptionTextParams, Icon, key }) => (
          <ExperienceCard
            description={getMessage(descriptionKey, descriptionTextParams)}
            Icon={Icon}
            key={key}
            rotateDeg={rotateDeg}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
