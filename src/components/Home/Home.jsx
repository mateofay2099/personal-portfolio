import React, { useState } from 'react';
import { useClickHandlerContext } from '@providers/ClickHandler.provider';
import { getAge, MY_BIRTH_DATE } from '@utils/getAge';
import homeBackground from '@images/homeBackground.jpg';
import NavBar from './NavBar';
import AboutMeModal from './AboutMeModal';
import './Home.css';

const Home = () => {
  const { addFunctionToExecute, removeFunctionToExecute } = useClickHandlerContext();
  const [showAboutMeModal, setShowAboutMeModal] = useState(false);
  const age = getAge(MY_BIRTH_DATE);

  const onClickOutsideModal = () => {
    setShowAboutMeModal(false);
    removeFunctionToExecute(onClickOutsideModal);
  };

  const handleAboutMeButtonClick = (e) => {
    e.stopPropagation();
    setShowAboutMeModal(true);
    addFunctionToExecute(onClickOutsideModal);
  };

  return (
    <section className="home" style={{ backgroundImage: `url(${homeBackground})` }}>
      <NavBar />
      <div className="homeTitleDiv">
        <h1>Hi, I am</h1>
        <h1>Mateo Fay</h1>
        <h4>Fullstack Developer</h4>
      </div>
      <div className="homeIntroductionDiv">
        <p>
          I am {age} years old. I started working on software development when I was 19 years old,
          although I had already learned the basics of programming in a self-taught way.
        </p>
        <p>
          I love what I do and I am constantly looking for learning new technologies and improving
          my current skills.
        </p>
      </div>
      <button className="aboutMeButton" onClick={handleAboutMeButtonClick}>
        <p>More About Me</p>
      </button>
      {showAboutMeModal && <AboutMeModal onCloseButtonClick={onClickOutsideModal} />}
    </section>
  );
};

export default Home;
