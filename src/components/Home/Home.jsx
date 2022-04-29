import React, { useState } from 'react';
import { useThemeContext } from '@providers/Theming.provider.jsx';
import { useClickHandlerContext } from '@providers/ClickHandler.provider';
import { useLanguageContext } from '@providers/Language.provider';
import { getAge, MY_BIRTH_DATE } from '@utils/getAge';
import homeBackground from '@images/homeBackground.jpg';
import meImg from '@images/me.jpeg';
import NavBar from './NavBar';
import AboutMeModal from './AboutMeModal';
import './Home.css';

const Home = () => {
  const [showAboutMeModal, setShowAboutMeModal] = useState(false);
  const { currentTheme } = useThemeContext();
  const backgroundImage = `linear-gradient(to bottom, transparent, ${currentTheme.customBlack}), url(${homeBackground})`;
  const age = getAge(MY_BIRTH_DATE);
  const { addFunctionToExecute } = useClickHandlerContext();
  const { getMessage } = useLanguageContext();

  const onClickOutsideModal = () => {
    setShowAboutMeModal(false);
  };

  const handleAboutMeButtonClick = (e) => {
    e.stopPropagation();
    setShowAboutMeModal(true);
    addFunctionToExecute(onClickOutsideModal);
  };

  return (
    <div className="homeWithNavbar" style={{ backgroundImage }}>
      <NavBar />
      <div className="fullHome">
        <section className="home">
          <div className="homeTitleDiv">
            <h1>{getMessage('home.name.introduction')}</h1>
            <h1>Mateo Fay</h1>
            <h4>{getMessage('home.profession')}</h4>
          </div>
          <div className="homeIntroductionDiv">
            <p data-cy="homeIntroduction1">
              {getMessage('home.introduction.description1', { age })}
            </p>
            <p>{getMessage('home.introduction.description2')}</p>
          </div>
          <button
            className="aboutMeButton"
            data-cy="aboutMeButton"
            onClick={handleAboutMeButtonClick}>
            <p>{getMessage('home.aboutMe.button')}</p>
          </button>
          {showAboutMeModal && <AboutMeModal onCloseButtonClick={onClickOutsideModal} />}
        </section>
        <div className="meImgContainer">
          <figure>
            <img src={meImg} />
            <div className="meImgBorderShadow" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Home;
