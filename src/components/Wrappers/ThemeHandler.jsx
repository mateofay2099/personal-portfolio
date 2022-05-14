import React, { useEffect } from 'react';
import { useThemeContext } from '@providers/Theming.provider.jsx';
import {
  BUTTON_PADDING,
  CUSTOM_BORDER_RADIUS,
  CUSTOM_BOX_SHADOW,
  CUSTOM_PADDING,
  PRIMARY_FONT,
} from '@utils/constants';
import hexToRGBA from '@utils/hexToRgba';

const ThemeHandler = ({ children }) => {
  const { currentTheme } = useThemeContext();

  const COMPLETE_CUSTOM_BOX_SHADOW = `${CUSTOM_BOX_SHADOW} ${currentTheme.primary}`;

  useEffect(() => {
    Object.entries(currentTheme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
    document.documentElement.style.setProperty(
      '--blurredPrimary',
      hexToRGBA(currentTheme.primary, 0.7)
    );
  }, [currentTheme]);

  useEffect(() => {
    document.documentElement.style.setProperty('--primary-font', PRIMARY_FONT);
    document.documentElement.style.setProperty('--custom-border-radius', CUSTOM_BORDER_RADIUS);
    document.documentElement.style.setProperty('--custom-box-shadow', CUSTOM_BOX_SHADOW);
    document.documentElement.style.setProperty(
      '--complete-custom-box-shadow',
      COMPLETE_CUSTOM_BOX_SHADOW
    );
    document.documentElement.style.setProperty('--custom-padding', CUSTOM_PADDING);
    document.documentElement.style.setProperty('--button-padding', BUTTON_PADDING);
  }, []);

  return <>{children}</>;
};

export default ThemeHandler;
