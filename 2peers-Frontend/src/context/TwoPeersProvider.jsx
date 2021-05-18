import { React, useState, useEffect } from 'react';
// import { Redirect } from 'react-dom';
import Axios from 'axios';
import TwoPeersContext from './TwoPeersContext';

function TwoPeersProvider({ children }) {
  const [toggleModal, displaySwitch] = useState(null);

  const [data, setData] = useState(null);

  useEffect(() => {
    Axios.get('/api')
      .then((message) => setData(message.data));
  });

  const [userName, setName] = useState('');
  const [userEmail, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  const [checkbox, setCheck] = useState('');
  const [valid, setValid] = useState(false);

  function SignUp(e) {
    e.preventDefault();
    Axios.post('api/signup', {
      name: userName,
      email: userEmail,
      encryptedpassword: userPassword,
      checkbox,
    });
  }

  function SignIn(e) {
    e.preventDefault();
    Axios.post('/api/signin', {
      email: userEmail,
      encryptedpassword: userPassword,
      checkbox,
      valid,
    });
  }

  const values = {
    displaySwitch,
    toggleModal,
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
    SignIn,
    valid,
    setValid,
  };

  return (
    <TwoPeersContext.Provider value={values}>
      { children }
    </TwoPeersContext.Provider>
  );
}

export default TwoPeersProvider;
