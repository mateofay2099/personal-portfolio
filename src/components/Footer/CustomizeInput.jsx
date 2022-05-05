import React from 'react';
import { GithubPicker } from 'react-color';
import { useThemeContext } from '@providers/Theming.provider.jsx';
import { useClickHandlerContext } from '@providers/ClickHandler.provider';
import { AVAILABLE_COLORS } from '@utils/constants';
import './Footer.css';

const CustomizeInput = ({ colorPickerOpened, label, setColorPickerOpened, themeKey }) => {
  const { currentTheme, setCurrentTheme } = useThemeContext();
  const { addFunctionToExecute } = useClickHandlerContext();
  const inputId = `customizeInput-${label}`;

  const closeColorPicker = () => setColorPickerOpened(null);

  const handleInputClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setColorPickerOpened(themeKey);
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
      {colorPickerOpened && (
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
