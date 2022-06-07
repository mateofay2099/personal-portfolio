import React, { useState } from 'react';
import CustomModal from '@components/Common/CustomModal/CustomModal';
import CustomListItem from '@components/Common/CustomListItem/CustomListItem';
import { useLanguageContext } from '@providers/Language.provider';
import useWindowDimensions from '@hooks/useWindowDimensions';
import TECHNOLOGIES from './technologiesData';
import './Technologies.css';

const getListHeightByWidth = (width) => {
  const possibleHeights = [260, 370, 495];
  const minWidths = [835, 645, 455];

  for (let i = 0; i < minWidths.length; i++) {
    if (width >= minWidths[i]) {
      return possibleHeights[i];
    }
  }
  return 'auto';
};

const Technologies = () => {
  const [showModal, setShowModal] = useState(false);
  const { getMessage } = useLanguageContext();
  const { width } = useWindowDimensions();

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const listHeight = getListHeightByWidth(width);

  return (
    <>
      <p className="clickableText" onClick={openModal}>
        {getMessage('experience.openTechnologies')}
      </p>
      <CustomModal
        customClass="technologiesModal"
        isOpen={showModal}
        onRequestClose={closeModal}
        showCloseButton>
        <h3>{getMessage('technologies.title')}</h3>
        <ul className="technologiesList" style={{ height: listHeight }}>
          {TECHNOLOGIES.map(({ description, subItems }) => (
            <CustomListItem description={description} key={description} subItems={subItems} />
          ))}
        </ul>
      </CustomModal>
    </>
  );
};

export default Technologies;
