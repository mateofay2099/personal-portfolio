import React, { useState } from 'react';
import { useLanguageContext } from '@providers/Language.provider';
import CustomModal from '@components/Common/CustomModal/CustomModal';
import CustomListItem from '@components/Common/CustomListItem/CustomListItem';
import GROUPED_COURSES from './coursesData';
import './Courses.css';

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
      <CustomModal
        customClass="coursesModal"
        isOpen={showModal}
        onRequestClose={closeModal}
        showCloseButton>
        <h3>{getMessage('courses.title')}</h3>
        <div className="coursesContainer">
          {GROUPED_COURSES.map(({ title, courses }) => (
            <React.Fragment key={title}>
              {title && <h4>{title}</h4>}
              {courses.map(({ courseKey, subItems }) => (
                <CustomListItem
                  description={getMessage(courseKey)}
                  key={courseKey}
                  subItems={subItems?.map(({ descriptionKey }) => ({
                    description: getMessage(descriptionKey),
                  }))}
                />
              ))}
            </React.Fragment>
          ))}
        </div>
      </CustomModal>
    </>
  );
};

export default Courses;
