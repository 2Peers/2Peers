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
    <form onSubmit={sendMessage} className="w-full min-w-sm px-5 py-3">
      <div className="flex items-center border-b border-green-300 py-2 w-full">
        {/*
          Give the input below a value of the users id
          Conditionally render the name as studentid or
          teacher id according to the props avaiable
        */}
        <input name="id" type="hidden" />
        <input name="message" placeholder="Type Message here..." type="text" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 leading-tight focus:outline-none" onChange={({ target }) => { setMessage(target.value); }} value={message} />
        <input type="submit" value="Send" className="bg-green-400  hover:bg-green-700 border-green-500 hover:border-green-700 text-lg text-white py-1 px-2 rounded" />
      </div>
    </form>
  );
}
