import Axios from 'axios';
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import TwoPeersContext from '../context/TwoPeersContext';
import EditStudent from '../Student/EditStudent';
import EditTeacher from '../Teacher/EditTeacher';

export default function Profile({ isStudent }) {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pic, setPic] = useState('');
  const [edit, setEdit] = useState(false);
  const userData = useContext(TwoPeersContext).setData;
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

  const returnEdit = () => {
    if (edit) {
      if (isStudent) {
        return (
          <EditStudent
            submission={
              (newName, newEmail) => {
                setName(newName);
                setEmail(newEmail);
                setEdit((prev) => !prev);
              }
            }
            oldName={name}
            oldEmail={email}
          />
        );
      }
      return (
        <EditTeacher
          submission={
            (newName, newEmail) => {
              setName(newName);
              setEmail(newEmail);
              setEdit((prev) => !prev);
            }
          }
          oldName={name}
          oldEmail={email}
        />
      );
    }
    return null;
  };

  const deleteUser = async () => {
    if (isStudent) {
      await Axios.delete(`/student/${id}`);
      userData({});
    } else {
      await Axios.delete(`/teachers/${id}`);
      userData({});
    }
    history.push('/');
  };

  return (
    <div className="profile-container w-11/12 my-8 rounded shadow-lg flex justify-start">
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
          <button type="button" onClick={() => { setEdit((prev) => !prev); }} className="mx-3 bg-transparent hover:bg-green-400 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-400 hover:border-transparent rounded">Edit</button>
          <button onClick={deleteUser} type="button" className="mx-3 bg-transparent hover:bg-green-400 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-400 hover:border-transparent rounded">Delete</button>
        </div>
      </div>
      { returnEdit() }
    </div>
  );
}

Profile.propTypes = {
  isStudent: PropTypes.bool,
};

Profile.defaultProps = {
  isStudent: false,
};
