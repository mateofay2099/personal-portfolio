import React, { useState } from 'react';
import NavBarButton from '@icons/navBarButton.svg';
import { useThemeContext } from '@providers/Theming.provider.jsx';
import { useClickHandlerContext } from '@providers/ClickHandler.provider';
import './Home.css';

const NavBar = () => {
  const { currentTheme } = useThemeContext();
  const [showNavBarOptions, setShowNavBarOptions] = useState(false);
  const { addFunctionToExecute, removeFunctionToExecute } = useClickHandlerContext();

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
        stroke={currentTheme.secondary}
        style={showNavBarOptions ? { visibility: 'hidden' } : {}}
      />
      {showNavBarOptions && (
        <ul className="collapsableNavBarOptions">
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
