import { React, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MakeMessage() {
  const [message, setMessage] = useState('');
  const { id } = useParams();

  function sendMessage(e) {
    e.preventDefault();

    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        message,
        messagerating: 0,
        class: id,
      }),
    };
    // make a post request
    // Once the sign in logic is merged in, replace the 1
    // in the fetch request below with the student id
    fetch('http://localhost:3000/student/1/message', options);
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
