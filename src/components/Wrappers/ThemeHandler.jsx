import React, { useEffect } from 'react';
import { useThemeContext } from '@providers/Theming.provider.jsx';

const ThemeHandler = ({ children }) => {
  const { currentTheme } = useThemeContext();

  useEffect(() => {
    Object.entries(currentTheme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
  }, [currentTheme]);

  return <>{children}</>;
};

export default ThemeHandler;
