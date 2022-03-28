import React, { useEffect } from 'react';
import WebFont from 'webfontloader';
import { useThemeContext } from '@providers/Theming.provider.jsx';

const ThemeHandler = ({ children }) => {
  const { currentTheme } = useThemeContext();
  const PRIMARY_FONT = 'Varela Round';

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
  }, []);

  return <>{children}</>;
};

export default ThemeHandler;
