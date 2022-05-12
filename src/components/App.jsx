import React, { useRef } from 'react';
import Home from '@components/Home/Home';
import Experience from '@components/Experience/Experience';
import Portfolio from '@components/Portfolio/Portfolio';
import Footer from '@components/Footer/Footer';
import ThemeHandler from '@components/Wrappers/ThemeHandler';
import { ThemeProvider } from '@providers/Theming.provider.jsx';
import { ClickHandlerProvider } from '@providers/ClickHandler.provider';
import { LanguageProvider } from '@providers/Language.provider';
import backgroundImage from '@images/backgroundImage.jpg';
import './App.css';

const App = () => {
  const experienceRef = useRef(null);
  const scrollToNextSection = () => {
    experienceRef?.current?.scrollIntoView();
  };

  return (
    <LanguageProvider>
      <ThemeProvider>
        <ThemeHandler>
          <ClickHandlerProvider>
            <div className="backgroundImageGradient">
              <img alt="Background Image" className="backgroundImage" src={backgroundImage} />
            </div>
            <Home scrollToNextSection={scrollToNextSection} />
            <Experience ref={experienceRef} />
            <Portfolio />
            <Footer />
          </ClickHandlerProvider>
        </ThemeHandler>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;
