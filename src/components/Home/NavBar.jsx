import React, { useState } from 'react';
import NavBarButton from '@icons/navBarButton.svg';
import { useThemeContext } from '@providers/Theming.provider.jsx';
import { useClickHandlerContext } from '@providers/ClickHandler.provider';
import { useLanguageContext } from '@providers/Language.provider';
import './Home.css';

const NavBar = () => {
  const { currentTheme } = useThemeContext();
  const [showNavBarOptions, setShowNavBarOptions] = useState(false);
  const { addFunctionToExecute, removeFunctionToExecute } = useClickHandlerContext();
  const { getMessage } = useLanguageContext();

  const onClickOutsideNavBarOptions = () => {
    setShowNavBarOptions(false);
    removeFunctionToExecute(onClickOutsideNavBarOptions);
  };

  const handleNavBarButtonClick = (e) => {
    e.stopPropagation();
    setShowNavBarOptions(true);
    addFunctionToExecute(onClickOutsideNavBarOptions);
  };

  return (
    <nav>
      <NavBarButton
        className="navBarButton"
        onClick={handleNavBarButtonClick}
        stroke={currentTheme.primary}
        style={showNavBarOptions ? { visibility: 'hidden' } : {}}
      />
      {showNavBarOptions && (
        <ul className="collapsableNavBarOptions">
          <li>
            <a href="#experience">{getMessage('experience.title')}</a>
          </li>
          <li>
            <a href="#portfolio">{getMessage('portfolio.title')}</a>
          </li>
          <li>
            <a href="#contact">{getMessage('home.navBar.contact')}</a>
          </li>
          <li onClick={(e) => e.stopPropagation()}>
            <select name="language" id="languageSelector">
              <option selected disabled>
                {getMessage('home.navBar.selectLanguage')}
              </option>
              <option>{getMessage('home.navBar.english')}</option>
              <option>{getMessage('home.navBar.spanish')}</option>
            </select>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
