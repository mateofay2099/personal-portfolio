import React, { useState } from 'react';
import { useLanguageContext } from '@providers/Language.provider';
import igLogo from '@gifs/igLogo.gif';
import gmailLogo from '@gifs/gmailLogo.gif';
import wspLogo from '@gifs/wspLogo.gif';
import githubLogo from '@gifs/githubLogo.gif';
import CustomizeModal from './CustomizeModal';
import './Footer.css';

const mail = 'mateofay2099@gmail.com';

export const contactOptions = [
  {
    className: 'igLogo',
    displayName: 'mateofay',
    href: 'https://www.instagram.com/mateofay/',
    logo: igLogo,
  },
  {
    className: 'gmailLogo',
    displayName: mail,
    href: `mailto:${mail}`,
    logo: gmailLogo,
  },
  {
    className: 'wspLogo',
    displayName: '(+54)3489667423',
    href: 'https://wa.me/5493489667423',
    logo: wspLogo,
  },
  {
    className: 'githubLogo',
    displayName: 'mateofay2099',
    href: 'https://github.com/mateofay2099',
    logo: githubLogo,
  },
];

const Footer = () => {
  const [showCustomizeModal, setShowCustomizeModal] = useState(false);
  const { getMessage } = useLanguageContext();

  return (
    <footer data-cy="footer">
      <div className="contact">
        <div className="contactTitle">
          <h5>Let&apos;s stay in touch!</h5>
        </div>
        <div className="contactOptions">
          {contactOptions.map(({ className, displayName, href, logo }) => (
            <a data-cy={`contactOption-${className}`} href={href} key={className}>
              <img className={className} src={logo} />
              <p>{displayName}</p>
            </a>
          ))}
        </div>
      </div>

      <div className="customizePageSection">
        <h5>{getMessage('footer.customizeTitle')}</h5>
        <button data-cy="customizeButton" onClick={() => setShowCustomizeModal(true)}>
          <p>{getMessage('footer.customizeButton')}</p>
        </button>
        <CustomizeModal
          isOpen={showCustomizeModal}
          onCloseButtonClick={() => setShowCustomizeModal(false)}
        />
      </div>
    </footer>
  );
};

export default Footer;
