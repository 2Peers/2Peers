import React, { useState } from 'react';

export default function EditStudent() {
  const [name, setName] = useState('');

  function sendEditedStudent(e) {
    e.preventDefault();
  }

  return (
    <div className="editStudentPage">
      <h1>Editing Student Page</h1>
      <div className="student-info flex justify-center">
        <form className="w-9/12" onSubmit={sendEditedStudent}>
          <label
            htmlFor="name"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex flex-wrap -mx-3 mb-6"
          >
            <p className="mb-5">Name</p>
            <br />
            <input
              id="name"
              value={name}
              type="text"
              onChange={({ target }) => { setName(target.value); }}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
            <br />
            <input
              readOnly
              type="submit"
              value="Submit"
              className="bg-green-400 hover:bg-green-500 p-1 px-2 rounded text-white my-1 focus:shadow-outline focus:outline-none text-base"
            />
          </label>
        </form>
      </div>
    </div>
  );
}
