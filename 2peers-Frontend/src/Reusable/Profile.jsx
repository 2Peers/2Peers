import Axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import EditStudent from '../Student/EditStudent';
import EditTeacher from '../Teacher/EditTeacher';
import ArchiveT from '../Teacher/Archive';
import ArchiveS from '../Student/Archive';

export default function Profile({ isStudent, ...props }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pic, setPic] = useState([]);
  const [edit, setEdit] = useState(false);
  const [archive, setArchive] = useState(false);

  const { ...match } = props;
  const { params: { id } } = match;

  console.log('profile pic:', pic);

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
          console.log('data :', data);
          setName(data.name);
          setEmail(data.email);
          setPic(data.profilepic);
        });
    }
  }, [id]);

  const returnEdit = () => {
    if (edit) {
      if (isStudent) {
        return (
          <EditStudent
            {...match}
            submission={
              (newName, newEmail, newPic) => {
                setName(newName);
                setEmail(newEmail);
                setPic(newPic);
                setEdit((prev) => !prev);
              }
            }
            cancel={() => { setEdit((prev) => !prev); }}
            oldName={name}
            oldEmail={email}
            oldPic={pic}
          />
        );
      }
      return (
        <EditTeacher
          {...match}
          submission={
            (newName, newEmail, newPic) => {
              setName(newName);
              setEmail(newEmail);
              setPic(newPic);
              setEdit((prev) => !prev);
            }
          }
          cancel={() => { setEdit((prev) => !prev); }}
          oldName={name}
          oldEmail={email}
          oldPic={pic}
        />
      );
    }
    return null;
  };

  const returnArchive = () => {
    if (archive) {
      if (isStudent) {
        return (
          <ArchiveS {...props} cancel={() => { setArchive((prev) => !prev); }} />
        );
      }
      return (
        <ArchiveT {...props} cancel={() => { setArchive((prev) => !prev); }} />
      );
    }
    return null;
  };

  // useEffect(() => () => {
  //   // Make sure to revoke the data uris to avoid memory leaks
  //   pic.forEach((file) => URL.revokeObjectURL(file.preview));
  // }, [pic]);

  // const dropZOnepic = pic.map((file) => (
  //   <img key={file.path} src={file.preview} alt="Profile" />
  // ));

  return (
    <div className="profile-container w-11/12 my-8 rounded shadow-lg flex justify-start">
      <div className="prof-img h-40 w-1/4 p-8">
        <img src={pic} alt="profile pic" />
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
          <button onClick={() => { setArchive((prev) => !prev); }} type="button" className="mx-3 bg-transparent hover:bg-green-400 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-400 hover:border-transparent rounded">Delete</button>
        </div>
      </div>
      { returnEdit() }
      { returnArchive() }
    </div>
  );
}

Profile.propTypes = {
  isStudent: PropTypes.bool,
};

Profile.defaultProps = {
  isStudent: false,
};
