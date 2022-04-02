import React from 'react';
import Home from '@components/Home/Home';
import Experience from '@components/Experience/Experience';
import ThemeHandler from '@components/Wrappers/ThemeHandler';
import { ThemeProvider } from '@providers/Theming.provider.jsx';
import './App.css';

const App = () => (
  <ThemeProvider>
    <ThemeHandler>
      <main>
        <Home />
        <Experience />
      </main>
    </ThemeHandler>
  </ThemeProvider>
);

export default App;
