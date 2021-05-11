import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
// import Message from './Classroom/Message';
// import Navbar from './Reusable/Navbar';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((newData) => setData(newData.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{data || 'Loading...'}</p>
      </header>
    </div>
  );
}

export default App;