import React from 'react';
import Profile from '../Reusable/Profile';
import Classlist from '../Reusable/Classlist';

export default function Student() {
  return (
    <div className="grid justify-items-center">
      <Profile />
      <Classlist />
    </div>
  );
}
