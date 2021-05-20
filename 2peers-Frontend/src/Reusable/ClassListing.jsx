import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';

export default function ClassListing({ classroom, isStudent }) {
  const [className, setClassname] = useState('');
  const [selfRating, setSelfRating] = useState(0);
  const [peerRating, setPeerRating] = useState(0);
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
              console.log(raw);
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
    <Link to={`/classrooms/${classroom}`} className="class-instance rounded shadow-2xl text-gray-700 font-bold px-8 py-6 m-4 w-3/5 bg-white">
      <div>
        <div className="class-heading">
          <p>{className}</p>
          <p className="px-3 text-gray-400 text-sm font-medium">
            {`Self Rating: ${selfRating}`}
          </p>
          <p className="px-3 text-gray-400 text-sm font-medium">
            {`Peer Rating: ${peerRating}`}
          </p>
        </div>
      </div>
    </Link>
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
