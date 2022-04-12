import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const EMAIL_INPUT_PLACEHOLDER = 'Your email address';
  const MESSAGE_INPUT_PLACEHOLDER = 'Your Message...';

  const [textareaFocused, setTextareaFocused] = useState(false);

  return (
    <section className="contact" id="contact">
      <h2>Stay in Touch</h2>
      <p>
        If you are interested in my CV, want to develop a web or mobile app, or need any kind of
        help, feel free to reach out!
      </p>
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
          <p>Contact Me</p>
        </button>
      </form>
    </section>
  );
};

export default Contact;
