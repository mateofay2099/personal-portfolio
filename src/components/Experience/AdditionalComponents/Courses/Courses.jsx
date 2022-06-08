import React, { useState } from 'react';
import { useLanguageContext } from '@providers/Language.provider';
import CustomModal from '@components/Common/CustomModal/CustomModal';
import CustomListItem from '@components/Common/CustomListItem/CustomListItem';
import GROUPED_COURSES from './coursesData';
import './Courses.css';

const Courses = ({ cardKey }) => {
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
      <p className="clickableText" data-cy={`${cardKey}-additionalComponent`} onClick={openModal}>
        {getMessage('experience.openCourses')}
      </p>
      <CustomModal
        customClass="coursesModal"
        isOpen={showModal}
        onRequestClose={closeModal}
        showCloseButton>
        <h3 data-cy="coursesModal-title">{getMessage('courses.title')}</h3>
        <div className="coursesContainer">
          {GROUPED_COURSES.map(({ courses, key, logo, title }) => (
            <React.Fragment key={key}>
              {title && (
                <div className="platformTitleContainer">
                  {logo && <img alt={`${title} Logo`} data-cy={`${key}-logo`} src={logo} />}
                  <h4 data-cy={`${key}-title`}>{title}</h4>
                </div>
              )}
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
