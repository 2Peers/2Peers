import React, { useContext } from 'react';
import MakeClass from '../Teacher/MakeClass';
import ClassListing from './ClassListing';
import TwoPeersContext from '../context/TwoPeersContext';
// import MakeClass from '../Teacher/MakeClass';

export default function Classlist({ isStudent }) {
  const {
    toggleModal,
    displaySwitch,
  } = useContext(TwoPeersContext);

  return (
    <div className="classList m-8 w-9/12">
      <div className="heading text-gray-900 font-bold text-xl m-6 flex justify-between items-center">
        <h1 className="mx-8">Classes</h1>
        <button onClick={() => displaySwitch(true)} className="bg-transparent hover:bg-green-400 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-400 hover:border-transparent rounded" type="button">Add Class</button>
        { toggleModal ? <MakeClass isStudent={isStudent} /> : null }
      </div>
      <div className="class-container flex justify-center flex-wrap">
        <ClassListing />
      </div>
    </div>
  );
}

Classlist.propTypes = {
  isStudent: Boolean,
};

Classlist.defaultProps = {
  isStudent: false,
};
