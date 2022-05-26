import React, { useState } from 'react';
import { useLanguageContext } from '@providers/Language.provider';
import CustomModal from '@components/Common/CustomModal/CustomModal';
import COURSES from './coursesData';

const Courses = () => {
  const [showModal, setShowModal] = useState(false);
  const { getMessage } = useLanguageContext();

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <p className="clickableText" onClick={openModal}>
        {getMessage('experience.openCourses')}
      </p>
      <CustomModal isOpen={showModal} onRequestClose={closeModal} showCloseButton>
        {/* {COURSES.map(course => (

        ))} */}
      </CustomModal>
    </>
  );
};

export default Courses;
