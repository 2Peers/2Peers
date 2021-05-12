import React from 'react';
import ClassListing from './ClassListing';

export default function Classlist() {
  return (
    <div className="classList m-8 w-9/12">
      <div className="heading text-gray-900 font-bold text-xl m-6 flex justify-between items-center">
        <h1 className="mx-8">Classes</h1>
        <button className="bg-transparent hover:bg-green-400 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-400 hover:border-transparent rounded" type="button">Add Class</button>
      </div>
      <div className="class-container flex justify-center flex-wrap">
        <ClassListing />
      </div>
    </div>
  );
}
