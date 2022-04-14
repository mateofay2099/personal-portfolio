import React from 'react';
import { useThemeContext } from '@providers/Theming.provider.jsx';
import CloseButton from '@icons/closeButton.svg';
import './Home.css';

const AboutMeModal = ({ onCloseButtonClick }) => {
  const { currentTheme } = useThemeContext();
  const closeModalButtonColor = currentTheme.primary;

  return (
    <div className="aboutMeModalDiv">
      <div className="aboutMeModal" onClick={(e) => e.stopPropagation()}>
        <CloseButton
          className="closeModalButton"
          fill={closeModalButtonColor}
          onClick={onCloseButtonClick}
          stroke={closeModalButtonColor}
        />
        <h2>Location</h2>
        <p>
          I have lived in Campana my whole life, a city in the north of Buenos Aires, Argentina.
          Thanks to the rise of remote work, I am now able to work from wherever I want, something
          that I am planning to take advantage of in the near future. Although I am really
          comfortable with this way of working, I would also be willing to work in an office in
          another country, because I would really like to settle in a new interesting place.
        </p>
        <h2>Hobbies</h2>
        <p>
          Besides programming, in my free time I like to hang out with friends, play the guitar, go
          to the gym and spend some time at home with my two beautiful cats.
        </p>
        <h2>Long term plan</h2>
        <p>
          Although currently I am working as a fullstack developer, in the future I would like to
          move on to data science and machine learning. I find this area really interesting, and
          extremely important in the future of technology.
        </p>
      </div>
    </div>
  );
};

export default AboutMeModal;
