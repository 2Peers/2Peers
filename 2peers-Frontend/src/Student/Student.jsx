import React, { useContext } from 'react';
import Profile from '../Reusable/Profile';
import Classlist from '../Reusable/Classlist';
import TwoPeersContext from '../context/TwoPeersContext';

export default function Student() {
  const { data } = useContext(TwoPeersContext);

  return (
    <div className="grid justify-items-center">
      <h1>
        Student Page, Welcome
        {data.user.name}
      </h1>
      <Profile />
      <Classlist />
    </div>
  );
}
