import { React, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import TwoPeersContext from './TwoPeersContext';

function TwoPeersProvider({ children }) {
  const [toggleModal, displaySwitch] = useState(null);
  const [data, setData] = useState({});

  useEffect(() => {
    Axios.get('/api')
      .then((fetchData) => setData(fetchData.data.passedData));
  }, []);
  console.log(data);

  const [userName, setName] = useState('');
  const [userEmail, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  const [checkbox, setCheck] = useState(false);

  const history = useHistory();

  function SignUp(e) {
    e.preventDefault();
    const credentials = {
      name: userName,
      email: userEmail,
      encryptedpassword: userPassword,
      checkbox,
    };
    Axios.post('/signup', credentials);
    history.push('login');
  }

  function SignIn(e) {
    e.preventDefault();
    const credentials = {
      email: userEmail,
      encryptedpassword: userPassword,
      checkbox,
    };
    Axios.post('/signin', credentials)
      .then((userSession) => {
        setData(userSession.data);
        if (userSession.data.checkbox === true) {
          // console.log(checkbox);
          history.push(`/teachers/${userSession.data.user.id}`);
        } else {
          // console.log(checkbox);
          history.push(`/student/${userSession.data.user.id}`);
        }
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
  };

  return (
    <TwoPeersContext.Provider value={values}>
      { children }
    </TwoPeersContext.Provider>
  );
}

export default TwoPeersProvider;
