import React from 'react';

export default function Profile() {
  // const {name, email} = props;

  return (
    <div className="profile-container rounded overflow-hidden shadow-lg max-w-sm w-full lg:flex m-1">
      <div className="prof-img text-sm text-gray-600 flex items-center">
        <img src="" alt="Profile" />
      </div>
      <div className="user-content text-gray-900 font-bold text-xl mb-2 pl-8 flex-col justify-start">
        <div className="user-name py-2">Name</div>
        <div className="user-btns py-2">
          <button className="bg-green-400 hover:bg-green-500 p-1 px-2 rounded text-white m-1" type="button">Edit</button>
          <button className="bg-green-400 hover:bg-green-500 p-1 px-2 rounded text-white m-1" type="button">Delete</button>
        </div>
      </div>
    </div>
  );
}
