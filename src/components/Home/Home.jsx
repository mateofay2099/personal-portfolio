import React from 'react';
import homeBackground from '@images/homeBackground.jpg';
import NavBarButton from '@icons/navBarButton.svg';
import { useThemeContext } from '@providers/Theming.provider.jsx';
import './Home.css';

const Home = () => {
  const { currentTheme } = useThemeContext();

  return (
    <section className="home" style={{ backgroundImage: `url(${homeBackground})` }}>
      <nav>
        <NavBarButton className="navBarButton" stroke={currentTheme.secondary} />
      </nav>
    </section>
  );
};

export default Home;
