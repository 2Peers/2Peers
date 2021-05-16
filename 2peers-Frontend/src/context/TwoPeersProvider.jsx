import { React, useState, useEffect } from 'react';
import Axios from 'axios';
import TwoPeersContext from './TwoPeersContext';

function TwoPeersProvider({ children }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    Axios.get('/api')
      .then((message) => setData(message.data));
  });

  const [userName, setName] = useState('');
  const [userEmail, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  const [checkbox, setCheck] = useState('');

  function SignUp() {
    Axios.post('/api/signup', {
      name: userName,
      email: userEmail,
      encryptedpassword: userPassword,
      checkbox,
    });
  }

  const values = {
    data,
    setData,
    userName,
    setName,
    userEmail,
    setEmail,
    userPassword,
    setPassword,
    checkbox,
    setCheck,
    SignUp,
  };

  return (
    <TwoPeersContext.Provider value={values}>
      { children }
    </TwoPeersContext.Provider>
  );
}

export default TwoPeersProvider;
