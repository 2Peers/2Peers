/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import TwoPeersContext from '../context/TwoPeersContext';

function NavBar() {
  const { data, setData } = useContext(TwoPeersContext);
  return (
    <div className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2sm:px-6 lg:px-8 flex items-center justify-between h-16 bg-gray-800 font-bold text-white">
        <img className="h-8 w-8 rounded-full" src="#" alt="Logo" />
        { data.valid ? <Link to="/logout" onClick={() => { setData({}); }}>Logout</Link>
          : <Link to="/login">Login</Link> }
      </div>
    </div>
  );
}

export default NavBar;
