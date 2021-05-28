import PropTypes from 'prop-types';
import socketClient from 'socket.io-client';
import Axios from 'axios';
import { React, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MakeMessage({ userId, isStudent, update }) {
  const [message, setMessage] = useState('');
  const { id } = useParams();

  const sendMessage = async (e) => {
    e.preventDefault();
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: {
        message,
        classId: id,
      },
    };
    let SERVER;
    if (isStudent) {
      console.log(userId);
      SERVER = Axios.post(`/student/${userId}/message`, options);
    } else {
      console.log(userId);
      SERVER = Axios.post(`/teachers/${userId}/message`, options);
    }
    const socket = socketClient(SERVER);
    if (message) {
      socket.on('message', () => {
        console.log('sending messages');
        socket.send(`message: ${message}`);
        e.target.value = '';
        update();
      });
    }

    setMessage('');
  };

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

MakeMessage.propTypes = {
  update: PropTypes.func,
  userId: PropTypes.number,
  isStudent: PropTypes.bool,
};

MakeMessage.defaultProps = {
  update: null,
  userId: 1,
  isStudent: true,
};
