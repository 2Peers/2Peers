import Axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Profile({ isStudent }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pic, setPic] = useState('');
  const { id } = useParams();

  useEffect(() => {
    if (isStudent) {
      Axios.get(`/student/${id}`)
        .then(({ data }) => {
          setName(data.name);
          setEmail(data.email);
          setPic(data.profilepic);
        });
    } else {
      Axios.get(`/teachers/${id}`)
        .then(({ data }) => {
          setName(data.name);
          setEmail(data.email);
          setPic(data.profilepic);
        });
    }
  }, []);

  return (
    <div className="profile-container w-11/12 my-2 rounded shadow-lg flex justify-start">
      <div className="prof-img h-40 w-1/4">
        <img src={pic} alt="Profile" />
      </div>
      <div className="w-9/12">
        <div className="flex flex-col">
          <p className="text-gray-900 font-bold text-xl mb-2">
            {name}
          </p>
          <p className="text-gray-700 text-base">
            {email}
          </p>
        </div>
        <div className="user-btns py-5 flex w-3/12 justify-around">
          <button type="button" className="mx-3 bg-transparent hover:bg-green-400 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-400 hover:border-transparent rounded">Edit</button>
          <button type="button" className="mx-3 bg-transparent hover:bg-green-400 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-400 hover:border-transparent rounded">Delete</button>
        </div>
      </div>
    </div>
  );
}

Profile.propTypes = {
  isStudent: PropTypes.bool,
};

Profile.defaultProps = {
  isStudent: false,
};
