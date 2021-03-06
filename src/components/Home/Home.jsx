import React, { useState } from 'react';
import { useThemeContext } from '@providers/Theming.provider.jsx';
import { useLanguageContext } from '@providers/Language.provider';
import { getAge, MY_BIRTH_DATE } from '@utils/getAge';
import meImg from '@images/me.jpeg';
import ScrollIndicator from '@myIcons/scrollIndicator.svg';
import NavBar from './NavBar';
import AboutMeModal from './AboutMeModal';
import './Home.css';

const Home = ({ scrollToNextSection }) => {
  const [showAboutMeModal, setShowAboutMeModal] = useState(false);
  const { currentTheme } = useThemeContext();
  const age = getAge(MY_BIRTH_DATE);
  const { getMessage } = useLanguageContext();

  return (
    <div className="homeWithNavbar" data-cy="homeWithNavbarSection">
      <NavBar />
      <div className="fullHome">
        <section className="home">
          <div className="homeTitleDiv">
            <h1>{getMessage('home.name.introduction')}</h1>
            <h1>Mateo Fay</h1>
            <h2>{getMessage('home.profession')}</h2>
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
            onClick={() => setShowAboutMeModal(true)}>
            <p>{getMessage('home.aboutMe.button')}</p>
          </button>
          <AboutMeModal
            isOpen={showAboutMeModal}
            onCloseButtonClick={() => setShowAboutMeModal(false)}
          />
        </section>
        <div className="meImgContainer">
          <figure>
            <img alt="Image about me" data-cy="homeMeImg" src={meImg} height={550} width={550} />
            <div className="meImgBorderShadow" />
          </figure>
        </div>
        <ScrollIndicator
          className="scrollIndicatorIcon bounce"
          fill={currentTheme.secondary}
          onClick={scrollToNextSection}
        />
      </div>
    </div>
  );
};

export default Home;
