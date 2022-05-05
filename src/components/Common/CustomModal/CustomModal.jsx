import React from 'react';
import Modal from 'react-modal';
import CloseButton from '@myIcons/closeButton.svg';
import { CUSTOM_BOX_SHADOW, CUSTOM_BORDER_RADIUS, CUSTOM_PADDING } from '@utils/constants';
import { useThemeContext } from '@providers/Theming.provider.jsx';
import './CustomModal.css';

const CustomModal = ({
  children,
  closeButtonStyle = {},
  customClass = 'modal',
  isOpen,
  onRequestClose,
  showCloseButton = false,
  customStyle = {},
}) => {
  Modal.setAppElement('body');
  const { currentTheme } = useThemeContext();

  const closeModalButtonColor = currentTheme.primary;
  const defaultStyles = {
    content: {
      width: 'calc(100% - 3.3rem)',
      maxHeight: 'calc(90vh - 2.8rem)',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: currentTheme.background,
      marginTop: '1.4rem',
      boxShadow: `${CUSTOM_BOX_SHADOW} ${currentTheme.primary}`,
      borderRadius: CUSTOM_BORDER_RADIUS,
      position: 'relative',
      padding: CUSTOM_PADDING,
      overflowY: 'auto',
      zIndex: 10,
      ...customStyle,
    },
  };

  return (
    <Modal
      className={`modal ${customClass}`}
      closeTimeoutMS={1000}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={defaultStyles}>
      {showCloseButton && (
        <div className="closeModalButtonDiv" style={closeButtonStyle}>
          <CloseButton
            className="closeModalButton"
            data-cy={`${customClass}-closeButton`}
            fill={closeModalButtonColor}
            onClick={onRequestClose}
            stroke={closeModalButtonColor}
          />
        </div>
      )}
      <div data-cy={customClass}>{children}</div>
    </Modal>
  );
};

export default CustomModal;
