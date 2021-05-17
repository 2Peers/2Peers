import React, { useState, useContext } from 'react';
// import { useParams } from 'react-router-dom';
import TwoPeersContext from '../context/TwoPeersContext';

export default function MakeClass({ isStudent }) {
  const [code, setCode] = useState('');
  // const { id } = useParams();
  const {
    displaySwitch,
  } = useContext(TwoPeersContext);

  function preventDefault(e) {
    e.preventDefault();
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ code }),
    };

    if (isStudent) {
      fetch('http://localhost:3000/students/1/classes', options);
      return;
    }

    fetch('http://localhost:3000/teachers/1/classes', options);
  }

  return (
    <div className="form-container w-full fixed z-10 inset-0 overflow-y-auto flex justify-center items-center">
      <form onSubmit={(e) => { preventDefault(e); }} className="shadow-md rounded flex flex-col bg-white shadow-2xl">
        <h1 className="p-3 font-bold block text-center">Make a new Class</h1>
        <label htmlFor="code" className="p-3 text-gray-500">
          Code
          <input
            className="block border border-green-500 rounded text-gray-700 text-sm font-bold mb-2"
            name="code"
            value={code}
            onChange={({ target }) => setCode(target.value)}
          />
        </label>
        <div className="flex justify-center items-center">
          <input
            type="submit"
            readOnly
            value="Submit"
            className="shadow bg-green-400 hover:bg-green-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-2 rounded mx-2 mb-2"
          />
          <button onClick={() => displaySwitch(false)} type="button" className="shadow bg-green-400 hover:bg-green-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-2 rounded mx-2 mb-2">Close</button>
        </div>
      </form>
    </div>
  );
}

MakeClass.propTypes = {
  isStudent: Boolean,
};

MakeClass.defaultProps = {
  isStudent: false,
};
