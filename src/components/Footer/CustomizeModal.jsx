import React, { useState } from 'react';
import CustomModal from '@components/Common/CustomModal/CustomModal';
import { useLanguageContext } from '@providers/Language.provider';
import useWindowDimensions from '@hooks/useWindowDimensions';
import CustomizeInput from './CustomizeInput';
import './Footer.css';

export const customizeInputs = [
  { labelKey: 'footer.customizableOption.primary', themeKey: 'primary' },
  { labelKey: 'footer.customizableOption.secondary', themeKey: 'secondary' },
  { labelKey: 'footer.customizableOption.background', themeKey: 'background' },
  { labelKey: 'footer.customizableOption.text', themeKey: 'text' },
];

const CustomizeModal = ({ isOpen, onCloseButtonClick }) => {
  const [colorPickerOpened, setColorPickerOpened] = useState(null);
  const { getMessage } = useLanguageContext();
  const WIDTH_THRESHOLD = 768;
  const { width } = useWindowDimensions();
  const isSmallerDevice = width < WIDTH_THRESHOLD;

  const customStyle = {
    minWidth: isSmallerDevice ? 'calc(100% - 14vw)' : '40%',
    width: 'max-content',
  };

  return (
    <CustomModal
      customClass="customizeModal"
      customStyle={customStyle}
      isOpen={isOpen}
      onRequestClose={onCloseButtonClick}
      showCloseButton>
      <div className="customizeInputs">
        {customizeInputs.map(({ labelKey, themeKey }) => (
          <CustomizeInput
            colorPickerOpened={colorPickerOpened === themeKey}
            key={themeKey}
            label={getMessage(labelKey)}
            setColorPickerOpened={setColorPickerOpened}
            themeKey={themeKey}
          />
        ))}
      </div>
    </CustomModal>
  );
};

export default CustomizeModal;
