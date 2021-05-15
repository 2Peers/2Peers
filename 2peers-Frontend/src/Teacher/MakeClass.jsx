import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';

export default function MakeClass() {
  const [code, setCode] = useState('');
  // const { id } = useParams();

  function preventDefault(e) {
    e.preventDefault();
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ code }),
    };

    // console.log(`${window.location.origin}/teachers/${id}/classes`);
    // http://localhost:8000/teachers/1/classes
    fetch('http://localhost:3000/teachers/1/classes', options);
  }

  return (
    <div className="form-container w-full fixed z-10 inset-0 overflow-y-auto flex justify-center items-center">
      <form onSubmit={(e) => { preventDefault(e); }} className="shadow-md rounded flex flex-col">
        <h1 className="p-3 font-bold">Make a new Class</h1>
        <label htmlFor="code" className="p-3 text-gray-500">
          Code
          <input
            className="block border border-green-500 rounded text-gray-700 text-sm font-bold mb-2"
            name="code"
            value={code}
            onChange={({ target }) => setCode(target.value)}
          />
        </label>
        <input
          type="submit"
          readOnly
          value="Submit"
          className="shadow bg-green-400 hover:bg-green-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-2 rounded mx-2 mb-2"
        />
      </form>
    </div>
  );
}
