import { React, useState } from 'react';

export default function MakeMessage() {
  const [message, setMessage] = useState('');

  function sendMessage(e) {
    e.preventDefault();
    // make a post request
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        {/*
          Give the input below a value of the users id
          Conditionally render the name as studentid or
          teacher id according to the props avaiable
        */}
        <input name="id" type="hidden" />
        <input name="message" placeholder="Type Message here..." type="text" onChange={({ target }) => { setMessage(target.value); }} value={message} />
        <input type="submit" value="send" />
      </form>
    </div>
  );
}
