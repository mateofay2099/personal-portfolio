import React from 'react';
import homeBackground from '@images/homeBackground.jpg';
import NavBarButton from '@icons/navBarButton.svg';
import './Home.css';

const Home = () => {
  return (
    <section className="home" style={{ backgroundImage: `url(${homeBackground})` }}>
      <nav>
        <NavBarButton className="navBarButton" stroke="#e0c743" />
      </nav>
    </section>
  );
};

export default Home;
