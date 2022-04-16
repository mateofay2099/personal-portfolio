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
  const ENGLISH_TEXT = getMessage('home.navBar.english');
  const SPANISH_TEXT = getMessage('home.navBar.spanish');

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
    if (selectedLanguage === SPANISH_TEXT) setCurrentLanguage(LANGUAGES.SPA);
    if (selectedLanguage === ENGLISH_TEXT) setCurrentLanguage(LANGUAGES.ENG);
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
        <ul className="collapsableNavBarOptions">
          <li>
            <a data-cy="navBar-experienceOption" href="#experience">
              {getMessage('experience.title')}
            </a>
          </li>
          <li>
            <a href="#portfolio">{getMessage('portfolio.title')}</a>
          </li>
          <li>
            <a href="#contact">{getMessage('home.navBar.contact')}</a>
          </li>
          <li onClick={(e) => e.stopPropagation()}>
            <select name="language" id="languageSelector" onChange={onLanguageSelected}>
              <option selected disabled>
                {/* TODO: Fix this, use defaultValue on select */}
                {getMessage('home.navBar.selectLanguage')}
              </option>
              <option>{ENGLISH_TEXT}</option>
              <option>{SPANISH_TEXT}</option>
            </select>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
