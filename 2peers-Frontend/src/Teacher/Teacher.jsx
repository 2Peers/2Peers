import React, { useContext } from 'react';
// import MakeClass from './MakeClass';
import Profile from '../Reusable/Profile';
import Classlist from '../Reusable/Classlist';
import TwoPeersContext from '../context/TwoPeersContext';

export default function Teacher() {
  const { data } = useContext(TwoPeersContext);
  // make the modol pop up when a button is pressed functionality still in process....
  return (
    <div className="grid justify-items-center">
      <h1>teacher page</h1>
      <h4>
        Hello,
        {data.user.name}
      </h4>
      <Profile />
      <Classlist />
      {/* <MakeClass /> */}
    </div>
  );
}
