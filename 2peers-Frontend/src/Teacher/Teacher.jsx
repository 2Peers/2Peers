import React from 'react';
// import MakeClass from './MakeClass';
import Profile from '../Reusable/Profile';
import Classlist from '../Reusable/Classlist';

export default function Teacher(props) {
  // make the modol pop up when a button is pressed functionality still in process....
  return (
    <div data-testid="teacher-page" className="grid justify-items-center">
      <Profile {...props} />
      <Classlist {...props} />
      {/* <MakeClass /> */}
    </div>
  );
}
