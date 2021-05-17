/* eslint-disable react/prop-types */
import React from 'react';

function NavBar(props) {
  const { link, route } = props;
  return (
    <div className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2sm:px-6 lg:px-8 flex items-center justify-between h-16 bg-gray-800 font-bold text-white">
        <img className="h-8 w-8 rounded-full" src="#" alt="Logo" />
        <a href={route}>
          {link}
        </a>
      </div>
    </div>
  );
}

export default NavBar;
