import React from 'react';
import { useThemeContext } from '@providers/Theming.provider.jsx';
import { useLanguageContext } from '@providers/Language.provider';
import CloseButton from '@myIcons/closeButton.svg';
import CustomizeInput from './CustomizeInput';
import './Footer.css';

export const customizeInputs = [
  { labelKey: 'footer.customizableOption.primary', themeKey: 'primary' },
  { labelKey: 'footer.customizableOption.secondary', themeKey: 'secondary' },
  { labelKey: 'footer.customizableOption.background', themeKey: 'background' },
  { labelKey: 'footer.customizableOption.text', themeKey: 'text' },
];

const CustomizeModal = ({ onCloseButtonClick }) => {
  const { currentTheme } = useThemeContext();
  const { getMessage } = useLanguageContext();

  const closeModalButtonColor = currentTheme.primary;

  return (
    <div className="customizeModalDiv">
      <div data-cy="customizeModal" className="customizeModal" onClick={(e) => e.stopPropagation()}>
        <div className="closeModalButtonDiv">
          <CloseButton
            className="closeModalButton"
            data-cy="customizeModal-closeButton"
            fill={closeModalButtonColor}
            onClick={onCloseButtonClick}
            stroke={closeModalButtonColor}
          />
        </div>
        <div className="customizeInputs">
          {customizeInputs.map(({ labelKey, themeKey }) => (
            <CustomizeInput key={themeKey} label={getMessage(labelKey)} themeKey={themeKey} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomizeModal;
