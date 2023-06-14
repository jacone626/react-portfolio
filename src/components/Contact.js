import React, { useState } from 'react';
import '../css/Contact.css'

// import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';

function Contact() {
  // Create state variables for the fields in the form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and message
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit
    e.preventDefault();

    // First we check to see if the email is not valid or if Name is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or name is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }
    if (!message) {
      setErrorMessage('Message is required');

      return;
    }

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container mt-5">
      <h2 id="contact">Contact</h2>
      <form className="form">
        <h5>Name:</h5>
            <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
          />
        <h5>Email address:</h5>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
          />
        <h5>Message:</h5>
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            id="message-height"
          />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
