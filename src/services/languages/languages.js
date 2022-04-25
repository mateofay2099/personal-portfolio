import engMessages from './eng.js';
import spaMessages from './spa.js';

export const LANGUAGES = {
  ENG: 'ENGLISH',
  SPA: 'SPANISH',
};

const languagesMessages = {
  [LANGUAGES.ENG]: engMessages,
  [LANGUAGES.SPA]: spaMessages,
};

export const getMessageByLanguage = (language, messageKey, params) => {
  return languagesMessages[language][messageKey]
  ? languagesMessages[language][messageKey](params)
  : '';
};
