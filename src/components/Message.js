import React, { useState, useEffect } from 'react';
import { socketClient } from '../client';

const Message = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleChange = ({ target: { value }}) => setInputMessage(value);

  const handleSubmit = event => {
    event.preventDefault();
    const sendData = JSON.stringify({ action: "sendmessage", data: inputMessage });
    socketClient.send(sendData);
    setInputMessage('');
  };

  useEffect(() => {
    socketClient.onmessage = ({ data }) => setMessages(state => [...state, data]);
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" autocomplete="off" name="message" value={inputMessage} onChange={handleChange} />
        <button type="submit">Send Message</button>
      </form>
      <ul>{messages.map((message, index) => <li key={index}>{message}</li>)}</ul>
    </>
  );
};

export default Message;
