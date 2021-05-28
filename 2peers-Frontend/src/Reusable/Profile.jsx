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
    <>
      <div className="flex flex-col text-center w-full mt-5">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">{isStudent ? 'STUDENT PAGE' : 'TEACHER PAGE'}</h2>
      </div>
      <div className="container my-24">
        <div>
          <div className="bg-white relative shadow-xl w-5/6 md:w-4/6  lg:w-3/6 xl:w-2/6 mx-auto">
            <div className="flex justify-center">
              <img src={pic} alt="pic" className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-2xl border-4 border-white" />
            </div>
            <div className="mt-16">
              <h1 className="font-bold text-center text-3xl text-gray-900">{name}</h1>
              <p className="text-center text-sm text-gray-400 font-medium">{email}</p>
              <div className="flex justify-center my-5">
                <button type="button" onClick={() => { setEdit((prev) => !prev); }} className="mx-3 bg-transparent hover:bg-green-400 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-400 hover:border-transparent rounded">Edit</button>
                <button onClick={() => { setArchive((prev) => !prev); }} type="button" className="mx-3 bg-transparent hover:bg-green-400 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-400 hover:border-transparent rounded">Delete</button>
              </div>
            </div>
          </div>
        </div>
        { returnEdit() }
        { returnArchive() }
      </div>
    </>
  );
}

Profile.propTypes = {
  isStudent: PropTypes.bool,
};

Profile.defaultProps = {
  isStudent: false,
};
