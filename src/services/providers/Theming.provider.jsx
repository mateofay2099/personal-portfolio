import React, { createContext, useContext, useState } from 'react';
import { appTheme } from '../theming/ThemesDefinition';

const ThemeContext = createContext({});

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(appTheme);
  const themeContext = { currentTheme, setCurrentTheme };

  return <ThemeContext.Provider value={themeContext}>{children}</ThemeContext.Provider>;
};
