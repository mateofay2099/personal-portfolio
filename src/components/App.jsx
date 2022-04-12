import React from 'react';
import Home from '@components/Home/Home';
import Experience from '@components/Experience/Experience';
import Portfolio from '@components/Portfolio/Portfolio';
import Contact from '@components/Contact/Contact';
import ThemeHandler from '@components/Wrappers/ThemeHandler';
import { ThemeProvider } from '@providers/Theming.provider.jsx';
import { ClickHandlerProvider } from '@providers/ClickHandler.provider';
import './App.css';

const App = () => (
  <ThemeProvider>
    <ThemeHandler>
      <ClickHandlerProvider>
        <Home />
        <Experience />
        <Portfolio />
        <Contact />
      </ClickHandlerProvider>
    </ThemeHandler>
  </ThemeProvider>
);

export default App;
