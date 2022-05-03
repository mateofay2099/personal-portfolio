import React, { useState } from 'react';
import { GithubPicker } from 'react-color';
import { useThemeContext } from '@providers/Theming.provider.jsx';
import { AVAILABLE_COLORS } from '@utils/constants';
import './Footer.css';

const CustomizeInput = ({ label, themeKey }) => {
  const { currentTheme, setCurrentTheme } = useThemeContext();
  const [showColorPicker, setShowColorPicker] = useState(false);
  const inputId = `customizeInput-${label}`;

  const handleInputClick = (e) => {
    e.preventDefault();
    setShowColorPicker(true);
  };

  const onInputChange = (color) => {
    setShowColorPicker(false);
    setCurrentTheme({ ...currentTheme, [themeKey]: color.hex });
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
      />
      {showColorPicker && (
        <GithubPicker
          colors={AVAILABLE_COLORS}
          className="colorPicker"
          id={inputId}
          color={currentTheme[themeKey]}
          onChange={onInputChange}
        />
      )}
    </div>
  );
};

export default CustomizeInput;
