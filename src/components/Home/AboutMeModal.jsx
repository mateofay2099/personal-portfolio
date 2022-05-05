import React from 'react';
import CustomModal from '@components/Common/CustomModal/CustomModal';
import { useLanguageContext } from '@providers/Language.provider';
import './Home.css';

const AboutMeModal = ({ isOpen, onCloseButtonClick }) => {
  const { getMessage } = useLanguageContext();

  return (
    <CustomModal
      customClass="aboutMeModal"
      isOpen={isOpen}
      onRequestClose={onCloseButtonClick}
      showCloseButton>
      <h2>{getMessage('home.aboutMeModal.location.title')}</h2>
      <p>{getMessage('home.aboutMeModal.location.description')}</p>
      <h2>{getMessage('home.aboutMeModal.hobbies.title')}</h2>
      <p>{getMessage('home.aboutMeModal.hobbies.description')}</p>
      <h2>{getMessage('home.aboutMeModal.longTermPlan.title')}</h2>
      <p>{getMessage('home.aboutMeModal.longTermPlan.description')}</p>
    </CustomModal>
  );
};

export default AboutMeModal;
