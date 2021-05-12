import React from 'react';
import Profile from '../Reusable/Profile';
import Classlist from '../Reusable/Classlist';

export default function Teacher() {
  return (
    <div className="grid justify-items-center">
      <h1>teacher page</h1>
      <Profile />
      <Classlist />
    </div>
  );
}
