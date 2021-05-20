import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';
import EditSelfrating from './EditSelfrating';

export default function ClassListing({ classroom, isStudent }) {
  const [className, setClassname] = useState('');
  const [selfRating, setSelfRating] = useState(0);
  const [peerRating, setPeerRating] = useState(0);
  const [editVisible, setEditVisible] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    Axios.get(`/classrooms/${classroom}`)
      .then(({ data }) => {
        setClassname(data.classcode);
        if (isStudent) {
          // uses post otherwise the body is ignore because
          // thats just how google and electron work
          // https://stackoverflow.com/questions/46404051/send-object-with-axios-get-request
          Axios.post(`/student/${id}/rating`, {
            classcode: data.classcode,
          })
            .then((raw) => {
              setPeerRating(raw.data.rating ? raw.data.rating.toFixed(2) : 0);
            });

          Axios.post(`/classrooms/${data.id}`, {
            studentid: id,
          })
            .then((student) => {
              setSelfRating(student.data.selfrating);
            });
        }
      });
  }, []);

  return (
    <div className="w-full rounded shadow-2xl text-gray-700 font-bold px-8 py-6 m-4 w-3/5 bg-white flex justify-between">
      <Link to={`/classrooms/${classroom}`}>
        <div className="class-heading">
          <p>{className}</p>
          { isStudent
            ? (
              <div>
                <p className="px-3 text-gray-400 text-sm font-medium">
                  {`Self Rating: ${selfRating}`}
                </p>
                <p className="px-3 text-gray-400 text-sm font-medium">
                  {`Peer Rating: ${peerRating}`}
                </p>
              </div>
            ) : null}
        </div>
      </Link>
      { isStudent
        ? (
          <button type="button" onClick={() => { setEditVisible((prev) => !prev); }} className="shadow bg-green-400 hover:bg-green-500 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-6 rounded mx-2 mb-2">
            Edit
          </button>
        ) : null}
      { (editVisible && isStudent)
        ? (
          <EditSelfrating
            submission={(newRating) => {
              setEditVisible((prev) => !prev);
              setSelfRating(newRating);
            }}
            initRating={selfRating}
            classid={classroom}
          />
        ) : null}
    </div>
  );
}

ClassListing.propTypes = {
  classroom: PropTypes.number,
  isStudent: PropTypes.bool,
};

ClassListing.defaultProps = {
  classroom: null,
  isStudent: false,
};
