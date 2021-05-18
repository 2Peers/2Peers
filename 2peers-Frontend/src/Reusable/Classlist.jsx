import Axios from 'axios';
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MakeClass from '../Teacher/MakeClass';
import ClassListing from './ClassListing';
import TwoPeersContext from '../context/TwoPeersContext';
// import MakeClass from '../Teacher/MakeClass';

export default function Classlist({ isStudent }) {
  const {
    toggleModal,
    displaySwitch,
  } = useContext(TwoPeersContext);
  const { id } = useParams();
  const [classrooms, setClassrooms] = useState([]);

  useEffect(async () => {
    Axios.get(`/student/${id}/classes`)
      .then(({ data }) => {
        setClassrooms(data);
        console.log(classrooms);
      });
  }, [id]);

  return (
    <div className="classList m-8 w-9/12">
      <div className="heading text-gray-900 font-bold text-xl m-6 flex justify-between items-center">
        <h1 className="mx-8">Classes</h1>
        <button onClick={() => displaySwitch(true)} className="bg-transparent hover:bg-green-400 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-400 hover:border-transparent rounded" type="button">Add Class</button>
        { toggleModal ? <MakeClass isStudent={isStudent} /> : null }
      </div>
      <div className="class-container flex justify-center flex-wrap">
        {classrooms.map((classroom) => (
          <ClassListing
            classroom={classroom.class_id}
            key={classroom.class_id}
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
