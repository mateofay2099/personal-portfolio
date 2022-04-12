import React from 'react';
import './Experience.css';
import ExperienceCard from '@components/Experience/ExperienceCard';
import { CARDS } from '@components/Experience/ExperienceCardsData';

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h2>Experience</h2>
      <div className="experienceCardsDiv">
        {CARDS.map(({ description, icon, key }) => (
          <ExperienceCard description={description} icon={icon} key={key} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
