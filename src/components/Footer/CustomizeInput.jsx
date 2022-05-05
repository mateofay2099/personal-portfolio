import React, { useState } from 'react';
import { GithubPicker } from 'react-color';
import { useThemeContext } from '@providers/Theming.provider.jsx';
import { useClickHandlerContext } from '@providers/ClickHandler.provider';
import { AVAILABLE_COLORS } from '@utils/constants';
import './Footer.css';

const CustomizeInput = ({ label, themeKey }) => {
  const { currentTheme, setCurrentTheme } = useThemeContext();
  const { addFunctionToExecute } = useClickHandlerContext();
  const [showColorPicker, setShowColorPicker] = useState(false);
  const inputId = `customizeInput-${label}`;

  const closeColorPicker = () => setShowColorPicker(false);

  const handleInputClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setShowColorPicker(true);
    addFunctionToExecute(closeColorPicker);
  };

  const onInputChange = (color) => {
    setCurrentTheme({ ...currentTheme, [themeKey]: color.hex });
    closeColorPicker();
  };

  return (
    <div className="customizeInput">
      <label data-cy={`customizeInputLabel-${themeKey}`} htmlFor={inputId}>
        {label}
      </label>
      <input
        data-cy={`customizeInput-${themeKey}`}
        type="color"
        value={currentTheme[themeKey]}
        onClick={handleInputClick}
        onChange={() => {}}
      />
      {showColorPicker && (
        <GithubPicker
          className="colorPicker"
          colors={AVAILABLE_COLORS}
          id={inputId}
          color={currentTheme[themeKey]}
          onChange={onInputChange}
        />
      )}
    </div>
  );
};

export default CustomizeInput;
