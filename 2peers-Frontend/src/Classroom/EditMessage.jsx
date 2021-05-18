import PropTypes from 'prop-types';
import { React, useState } from 'react';

export default function EditMessage({ text, submission }) {
  const [messageTxt, setMessageTxt] = useState(text);

  function patchMessage(e) {
    e.preventDefault();
    submission();
  }

  return (
    <div className="modal-container w-full cursor-default fixed z-10 inset-0 overflow-y-auto flex justify-center items-center">
      <div className="edit-modal ">
        <form
          onSubmit={patchMessage}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <label
            htmlFor="message"
          >
            Editing Message
            <br />
            <input
              name="message"
              value={messageTxt}
              className="shadow appearance-none border rounded p-1 border-green-400 mt-2"
              onChange={({ target }) => { setMessageTxt(target.value); }}
            />
          </label>
          <br />
          <label htmlFor="submission">
            <input
              name="submission"
              type="submit"
              value="submit"
              className="bg-green-500 text-white font-bold uppercase py-2 px-4 rounded w-full my-2"
            />
          </label>
        </form>
      </div>
    </div>
  );
}

EditMessage.propTypes = {
  text: PropTypes.string,
  submission: PropTypes.func,
};

EditMessage.defaultProps = {
  text: null,
  submission: null,
};
