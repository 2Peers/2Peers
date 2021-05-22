import React from 'react';
// import MakeClass from './MakeClass';
import Profile from '../Reusable/Profile';
import Classlist from '../Reusable/Classlist';

export default function Teacher() {
  // make the modol pop up when a button is pressed functionality still in process....
  return (
    <div data-testid="teacher-page" className="grid justify-items-center">
      <h1>teacher page</h1>
      <Profile />
      <Classlist />
      {/* <MakeClass /> */}
    </div>
  );
}
