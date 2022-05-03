import React from 'react';
import Home from '@components/Home/Home';
import Experience from '@components/Experience/Experience';
import Portfolio from '@components/Portfolio/Portfolio';
import Footer from '@components/Footer/Footer';
import ThemeHandler from '@components/Wrappers/ThemeHandler';
import { ThemeProvider } from '@providers/Theming.provider.jsx';
import { ClickHandlerProvider } from '@providers/ClickHandler.provider';
import { LanguageProvider } from '@providers/Language.provider';
import './App.css';

const App = () => (
  <LanguageProvider>
    <ThemeProvider>
      <ThemeHandler>
        <ClickHandlerProvider>
          <Home />
          <Experience />
          <Portfolio />
          <Footer />
        </ClickHandlerProvider>
      </ThemeHandler>
    </ThemeProvider>
  </LanguageProvider>
);

export default App;
