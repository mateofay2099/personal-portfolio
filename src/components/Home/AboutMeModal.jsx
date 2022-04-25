import React from 'react';
import { useThemeContext } from '@providers/Theming.provider.jsx';
import { useLanguageContext } from '@providers/Language.provider';
import CloseButton from '@icons/closeButton.svg';
import './Home.css';

const AboutMeModal = ({ onCloseButtonClick }) => {
  const { currentTheme } = useThemeContext();
  const { getMessage } = useLanguageContext();

  const closeModalButtonColor = currentTheme.primary;

  return (
    <div className="aboutMeModalDiv">
      <div className="aboutMeModal" data-cy="aboutMeModal" onClick={(e) => e.stopPropagation()}>
        <CloseButton
          className="closeModalButton"
          data-cy="aboutMeModal-closeButton"
          fill={closeModalButtonColor}
          onClick={onCloseButtonClick}
          stroke={closeModalButtonColor}
        />
        <h2>{getMessage('home.aboutMeModal.location.title')}</h2>
        <p>{getMessage('home.aboutMeModal.location.description')}</p>
        <h2>{getMessage('home.aboutMeModal.hobbies.title')}</h2>
        <p>{getMessage('home.aboutMeModal.hobbies.description')}</p>
        <h2>{getMessage('home.aboutMeModal.longTermPlan.title')}</h2>
        <p>{getMessage('home.aboutMeModal.longTermPlan.description')}</p>
      </div>
    </div>
  );
};

export default AboutMeModal;
