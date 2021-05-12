import { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Footer from './context/Footer'

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
  
    fetch("/api")
      .then((res) => res.json())
      .then((newData) => setData(newData.message))
  }, []);

  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>{data ? data : "Loading..."}</p>
    </header>
    <Footer />
  </div>
  );
}

export default App;
