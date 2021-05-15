import { React, useState } from 'react';

export default function EditMessage() {
  const [messageTxt, setMessageTxt] = useState('thin...');

  function patchMessage(e) {
    console.log(e.target);
  }

  return (
    <div className="modal-container w-full fixed z-10 inset-0 overflow-y-auto flex justify-center items-center">
      <div className="edit-modal ">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={patchMessage}
        >
          <label
            htmlFor="message"
          >
            Message
            <br />
            <input
              name="message"
              value={messageTxt}
              className="shadow appearance-none border rounded p-1 border-green-400 mt-2"
              onChange={({ target }) => { setMessageTxt(target.value); }}
            />
          </label>
          <br />
          <input
            type="submit"
            readOnly
            value="submit"
            className="bg-green-500 text-white font-bold uppercase py-2 px-4 rounded w-full my-2"
          />
        </form>
      </div>
    </div>
  );
}
