import { React, useState, useEffect } from 'react';
import TwoPeersContext from './2PeersContext';

function TwoPeersProvider({ children }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((newData) => setData(newData.message));
  }, []);

  const values = {
    data,
    setData,
  };

  return (
    <TwoPeersContext.Provider value={values}>
      { children }
    </TwoPeersContext.Provider>
  );
}

export default TwoPeersProvider;
