import React, { useEffect, useState } from 'react';
import { useClickHandlerContext } from '@providers/ClickHandler.provider';
import { useLanguageContext } from '@providers/Language.provider';
import useWindowDimensions from '@hooks/useWindowDimensions';
import { LANGUAGES } from '@services/languages/languages';
import './Home.css';

const NavBar = () => {
  const EXPANDED_NAVBAR_THRESHOLD = 768;
  const { width } = useWindowDimensions();
  const shouldOptionsAlwaysBeDisplayed = width >= EXPANDED_NAVBAR_THRESHOLD;
  const [showNavBarOptions, setShowNavBarOptions] = useState(width > EXPANDED_NAVBAR_THRESHOLD);
  const { addFunctionToExecute, resetFunctionsToExecute } = useClickHandlerContext();
  const { getMessage, setCurrentLanguage } = useLanguageContext();
  const ENGLISH_VALUE = 'english';
  const SPANISH_VALUE = 'spanish';

  const navBarButtonStyle = shouldOptionsAlwaysBeDisplayed ? { display: 'none' } : {};
  const navBarOptionsStyle = !shouldOptionsAlwaysBeDisplayed && showNavBarOptions ? 'active' : '';

  const closeNavBarOptions = () => setShowNavBarOptions(false);

  const handleNavBarButtonClick = (e) => {
    e.stopPropagation();
    setShowNavBarOptions(true);
    addFunctionToExecute(closeNavBarOptions);
  };

  const onLanguageSelected = (e) => {
    const selectedLanguage = e.target.value;
    if (selectedLanguage === SPANISH_VALUE) setCurrentLanguage(LANGUAGES.SPA);
    if (selectedLanguage === ENGLISH_VALUE) setCurrentLanguage(LANGUAGES.ENG);
  };

  useEffect(() => {
    setShowNavBarOptions(shouldOptionsAlwaysBeDisplayed);
    if (shouldOptionsAlwaysBeDisplayed) {
      resetFunctionsToExecute();
    }
  }, [shouldOptionsAlwaysBeDisplayed, width]);

  const renderNavBarOptions = () => (
    <ul
      className={`navBarOptions ${navBarOptionsStyle}`}
      data-cy={`navBarOptions${navBarOptionsStyle}`}>
      <li>
        <a data-cy="navBar-experienceOption" href="#experience">
          {getMessage('experience.title')}
        </a>
      </li>
      <li>
        <a data-cy="navBar-portfolioOption" href="#portfolio">
          {getMessage('portfolio.title')}
        </a>
      </li>
      <li onClick={(e) => e.stopPropagation()}>
        <select
          data-cy="navBar-languageSelector"
          defaultValue="selectLanguage"
          name="language"
          id="languageSelector"
          onChange={onLanguageSelected}>
          <option data-cy="languageSelector-defaultOption" value="selectLanguage" disabled>
            {getMessage('home.navBar.selectLanguage')}
          </option>
          <option data-cy="languageSelector-englishOption" value={ENGLISH_VALUE}>
            {getMessage('home.navBar.english')}
          </option>
          <option data-cy="languageSelector-spanishOption" value={SPANISH_VALUE}>
            {getMessage('home.navBar.spanish')}
          </option>
        </select>
      </li>
    </ul>
  );

  return (
    <nav>
      <div
        className={`navBarButton ${navBarOptionsStyle}`}
        data-cy="navBarButton"
        onClick={showNavBarOptions ? closeNavBarOptions : handleNavBarButtonClick}
        style={navBarButtonStyle}>
        <span />
        <span />
        <span />
      </div>
      {renderNavBarOptions()}
    </nav>
  );
};

export default NavBar;
