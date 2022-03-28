import React from 'react';
import homeBackground from '@images/homeBackground.jpg';
import NavBarButton from '@icons/navBarButton.svg';
import { useThemeContext } from '@providers/Theming.provider.jsx';
import { getAge, MY_BIRTH_DATE } from '@utils/getAge';
import './Home.css';

const Home = () => {
  const { currentTheme } = useThemeContext();
  const age = getAge(MY_BIRTH_DATE);

  return (
    <section className="home" style={{ backgroundImage: `url(${homeBackground})` }}>
      <nav>
        <NavBarButton className="navBarButton" stroke={currentTheme.secondary} />
      </nav>
      <div className="homeTitleDiv">
        <h1>Hi, I am</h1>
        <h1>Mateo Fay</h1>
        <h4>Fullstack Developer</h4>
      </div>
      <div className="homeIntroductionDiv">
        <p>
          I am {age} years old. I started working on software development when I was 19 years old, although I had
          already learned the basics of programming in a self-taught way.
        </p>
        <p>
          I love what I do and I am constantly looking for learning new technologies and improving my current skills.
        </p>
      </div>
      <button className="aboutMeButton">
        <p>More About Me</p>
      </button>
    </section>
  );
};

export default Home;
