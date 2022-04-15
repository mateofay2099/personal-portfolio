import React, { useState } from 'react';
import { useLanguageContext } from '@providers/Language.provider';
import './Contact.css';

const Contact = () => {
  const [textareaFocused, setTextareaFocused] = useState(false);
  const { getMessage } = useLanguageContext();
  const EMAIL_INPUT_PLACEHOLDER = getMessage('contact.emailInput.placeholder');
  const MESSAGE_INPUT_PLACEHOLDER = getMessage('contact.messageInput.placeholder');

  return (
    <section className="contact" id="contact">
      <h2>{getMessage('contact.title')}</h2>
      <p>{getMessage('contact.description')}</p>
      <form>
        <input className="emailInput" placeholder={EMAIL_INPUT_PLACEHOLDER} type="email" />
        <div
          className={
            textareaFocused ? 'messageInputDiv messageInputDivFocused' : 'messageInputDiv'
          }>
          <textarea
            onBlur={() => setTextareaFocused(false)}
            onFocus={() => setTextareaFocused(true)}
            placeholder={MESSAGE_INPUT_PLACEHOLDER}
          />
        </div>
        <button className="contactMeButton">
          <p>{getMessage('contact.contactMe.button')}</p>
        </button>
      </form>
    </section>
  );
};

export default Contact;
