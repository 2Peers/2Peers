import React from 'react';

export default function Profile() {
  // const {name, email} = props;

  return (
    <div className="profile-container">
      <div className="prof-img">
        <img src="" alt="Profile" />
      </div>
      <div className="user-btns">
        <button type="button">Edit</button>
        <button type="button">Delete</button>
      </div>
    </div>
  );
}
