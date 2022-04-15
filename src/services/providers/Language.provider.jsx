import React, { createContext, useContext, useState } from 'react';
import { LANGUAGES, languagesMessages } from '@services/languages/languages';

const LanguageContext = createContext({});
export const useLanguageContext = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(LANGUAGES.ENG);
  const getMessage = (messageKey, params) =>
    languagesMessages[currentLanguage][messageKey]
      ? languagesMessages[currentLanguage][messageKey](params)
      : '';
  const languageContext = { currentLanguage, getMessage, setCurrentLanguage };

  return <LanguageContext.Provider value={languageContext}>{children}</LanguageContext.Provider>;
};
