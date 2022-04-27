import React, { useEffect } from 'react';
import WebFont from 'webfontloader';
import { useThemeContext } from '@providers/Theming.provider.jsx';

const ThemeHandler = ({ children }) => {
  const { currentTheme } = useThemeContext();
  const PRIMARY_FONT = 'Varela Round';
  const CUSTOM_BORDER_RADIUS = '2rem';
  const CUSTOM_BOX_SHADOW = `0.06rem 0.15rem 0.5rem 0.1rem ${currentTheme.primary}`;
  const CUSTOM_PADDING = '1.4rem 1.65rem';
  const BUTTON_PADDING = '1.4rem 2rem';

  useEffect(() => {
    Object.entries(currentTheme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
  }, [currentTheme]);

  useEffect(() => {
    WebFont.load({
      google: {
        families: [PRIMARY_FONT],
      },
    });
    document.documentElement.style.setProperty('--primary-font', PRIMARY_FONT);
    document.documentElement.style.setProperty('--custom-border-radius', CUSTOM_BORDER_RADIUS);
    document.documentElement.style.setProperty('--custom-box-shadow', CUSTOM_BOX_SHADOW);
    document.documentElement.style.setProperty('--custom-padding', CUSTOM_PADDING);
    document.documentElement.style.setProperty('--button-padding', BUTTON_PADDING);
  }, []);

  return <>{children}</>;
};

export default ThemeHandler;
