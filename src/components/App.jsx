import React from 'react';
import Home from '@components/Home/Home';
import { ThemeProvider } from '@providers/Theming.provider.jsx';
import './App.css';

const App = () => (
  <ThemeProvider>
    <main>
      <Home />
    </main>
  </ThemeProvider>
);

export default App;
