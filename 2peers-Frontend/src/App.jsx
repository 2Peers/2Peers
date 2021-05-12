import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
// import Classroom from './Classroom/Classroom';
// import Student from './Student/Student';
// import EditMessage from './Classroom/EditMessage';
// import EditStudent from './Student/EditStudent';
// import EditTeacher from './Teacher/EditTeacher';
// import Navbar from './Reusable/Navbar';
// import Banner from './Reusable/Banner';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((newData) => setData(newData.message));
  }, []);

  console.log(data);

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
