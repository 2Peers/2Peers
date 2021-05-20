import Axios from 'axios';
import PropTypes from 'prop-types';
import { React, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function EditSelfrating({ initRating, submission, classid }) {
  const [rating, setRating] = useState(initRating);
  const { id } = useParams();

  function patchRating(e) {
    e.preventDefault();
    Axios.patch(`/classrooms/${classid}/rating`, {
      id, rating,
    });
    submission();
  }

  return (
    <div className="modal-container w-full cursor-default fixed z-10 inset-0 overflow-y-auto flex justify-center items-center">
      <div className="edit-modal ">
        <form
          onSubmit={patchRating}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <label
            htmlFor="message"
          >
            Editing Self Rating
            <br />
            <input
              name="message"
              type="number"
              min="0"
              max="5"
              step=".01"
              value={initRating}
              className="shadow appearance-none border rounded p-1 border-green-400 mt-2 w-full"
              onChange={({ target }) => { setRating(target.value); console.log(target); }}
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

EditSelfrating.propTypes = {
  initRating: PropTypes.number,
  submission: PropTypes.func,
  classid: PropTypes.number,
};

EditSelfrating.defaultProps = {
  initRating: null,
  submission: null,
  classid: null,
};
