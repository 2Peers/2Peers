import React from 'react';

function NavBar() {
  // add styling later, should be: pfp| linkToProfile
  return (
    <div className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2sm:px-6 lg:px-8 flex items-center justify-between h-16 bg-gray-800 font-bold text-white">
        <img className="h-8 w-8 rounded-full" src="#" alt="Logo" />
        <a href="/"> Profile </a>
      </div>
    </div>
  );
}

export default NavBar;
