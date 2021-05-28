import Axios from 'axios';
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import MakeClass from '../Teacher/MakeClass';
import ClassListing from './ClassListing';
import TwoPeersContext from '../context/TwoPeersContext';
// import MakeClass from '../Teacher/MakeClass';

export default function Classlist({ isStudent, ...props }) {
  const {
    toggleModal,
    displaySwitch,
  } = useContext(TwoPeersContext);
  const { ...match } = props;
  const { params: { id } } = match;
  const [classrooms, setClassrooms] = useState([]);

  useEffect(async () => {
    if (isStudent) {
      Axios.get(`/student/${id}/classes`)
        .then(({ data }) => {
          setClassrooms(data);
        });
    } else {
      Axios.get(`/teachers/${id}/classes`)
        .then(({ data }) => {
          setClassrooms(data);
        });
    }
  }, [id]);

  const addClass = (newId) => {
    setClassrooms((prev) => [...prev, { class_id: newId }]);
  };

  return (
    <div className="classList m-6 w-9/12">
      <div className="heading text-gray-900 font-bold text-xl m-6 flex justify-between items-center">
        <h1 className="mx-8">Classes</h1>
        <button onClick={() => displaySwitch(true)} className="bg-transparent hover:bg-green-400 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-400 hover:border-transparent rounded" type="button">Add Class</button>
        { toggleModal ? (
          <MakeClass isStudent={isStudent} submission={addClass} {...props} />
        ) : null }
      </div>
      <div className="class-container flex justify-center flex-wrap">
        {classrooms.map((classroom) => (
          <ClassListing
            {...props}
            classroom={classroom.class_id || classroom.id}
            key={classroom.class_id || classroom.id}
            isStudent={isStudent}
          />
        )) }
      </div>
    </div>
  );
}

Classlist.propTypes = {
  isStudent: PropTypes.bool,
};

Classlist.defaultProps = {
  isStudent: null,
};
