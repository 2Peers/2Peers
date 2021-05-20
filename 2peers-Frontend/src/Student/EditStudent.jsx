import React, { useState } from 'react';

export default function EditStudent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function sendEditedStudent(e) {
    e.preventDefault();
  }

  return (
    <div className="editStudentPage w-full cursor-default fixed z-10 inset-0 overflow-y-auto flex justify-center items-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-center my-5">Editing Student Page</h1>
        <div className="student-info flex justify-center">
          <form className="w-9/12 flex flex-wrap flex-col" onSubmit={sendEditedStudent}>
            <label
              htmlFor="name"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex flex-wrap mb-6"
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
            </label>
            <label
              htmlFor="email"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 flex flex-wrap mb-6"
            >
              <p className="mb-5">Email</p>
              <br />
              <input
                id="email"
                value={email}
                type="text"
                onChange={({ target }) => { setEmail(target.value); }}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </label>
            <input
              readOnly
              type="submit"
              value="Submit"
              className="bg-green-400 hover:bg-green-500 rounded text-white my-1 focus:shadow-outline focus:outline-none text-lg p-4"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
