import React, { useState } from 'react';
import NavBarButton from '@icons/navBarButton.svg';
import { useThemeContext } from '@providers/Theming.provider.jsx';
import { useClickHandlerContext } from '@providers/ClickHandler.provider';
import { useLanguageContext } from '@providers/Language.provider';
import { LANGUAGES } from '@services/languages/languages';
import './Home.css';

const NavBar = () => {
  const { currentTheme } = useThemeContext();
  const [showNavBarOptions, setShowNavBarOptions] = useState(false);
  const { addFunctionToExecute, removeFunctionToExecute } = useClickHandlerContext();
  const { getMessage, setCurrentLanguage } = useLanguageContext();
  const ENGLISH_VALUE = 'english';
  const SPANISH_VALUE = 'spanish';

  const onClickOutsideNavBarOptions = () => {
    setShowNavBarOptions(false);
    removeFunctionToExecute(onClickOutsideNavBarOptions);
  };

  const handleNavBarButtonClick = (e) => {
    e.stopPropagation();
    setShowNavBarOptions(true);
    addFunctionToExecute(onClickOutsideNavBarOptions);
  };

  const onLanguageSelected = (e) => {
    const selectedLanguage = e.target.value;
    if (selectedLanguage === SPANISH_VALUE) setCurrentLanguage(LANGUAGES.SPA);
    if (selectedLanguage === ENGLISH_VALUE) setCurrentLanguage(LANGUAGES.ENG);
  };

  return (
    <nav>
      <NavBarButton
        className="navBarButton"
        data-cy="navBarButton"
        onClick={handleNavBarButtonClick}
        stroke={currentTheme.primary}
        style={showNavBarOptions ? { visibility: 'hidden' } : {}}
      />
      {showNavBarOptions && (
        <ul className="collapsableNavBarOptions" data-cy="navBarOptions">
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
          <li>
            <a data-cy="navBar-contactOption" href="#contact">
              {getMessage('home.navBar.contact')}
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
      )}
    </nav>
  );
};

export default NavBar;
