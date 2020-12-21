import React from 'react';
import emailjs from 'emailjs-com';
import { mailkey, mailId } from '../../secrets';
import './message-z.css';

function MessageHome() {
  const [state, setstate] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  function handleChange(event) {
    setstate({ ...state, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    emailjs.send('Email', mailId, state, mailkey).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
      },
      (err) => {
        console.log('FAILED...', err);
      }
    );
    console.log('okay, this worked');
    console.log(state);
    setstate({ name: '', email: '', message: '' });
  }

  return (
    <form className="message-container" onSubmit={handleSubmit}>
      <div>
        <input
          className="message-input"
          placeholder="Name"
          name="name"
          type="text"
          value={state.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          className="message-input"
          placeholder="Email"
          name="email"
          type="text"
          value={state.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <textarea
          className="message-detail"
          placeholder="Message"
          name="message"
          type="text"
          rows="5"
          value={state.message}
          onChange={handleChange}
        />
      </div>
      <div className="message-button-container ">
        <button className="message-button1" type="submit">
          Send
        </button>
      </div>
    </form>
  );
}

export default MessageHome;
