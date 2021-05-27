import Axios from 'axios';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

export default function EditTeacher({
  submission, oldName, oldEmail, ...match
}) {
  const [name, setName] = useState(oldName);
  const [email, setEmail] = useState(oldEmail);
  const [files, setFile] = useState([]);
  const { params: { id } } = match;

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFile(
        acceptedFiles.map((file) => Object.assign(file, {
          preview: URL.createObjectURL(file),
        })),
      );
    },
  });

  function sendEditedTeacher(e) {
    e.preventDefault();
    Axios.patch(`/teachers/${id}`, {
      name, email, files,
    });
    submission(name, email, files);
  }

  return (
    <div className="editTeacherPage fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-sm">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <form onSubmit={sendEditedTeacher}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div>
                    <h1>Edit Teacher Page</h1>
                    <br />
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div {...getRootProps()} className="space-y-1 text-center">
                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label htmlFor="profilepic" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            <span>Upload a file</span>
                            <input id="profilepic" name="profilepic" type="file" className="sr-only" {...getInputProps()} />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-red-500">
                          { files.length === 0 ? '' : files[0].path }
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="lg text-left flex flex-col">
                    <div className="relative mb-4">
                      <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                        Name
                        <input type="text" id="name" name="name" value={name} onChange={(e) => { setName(e.target.value); }} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                      </label>
                    </div>
                    <div className="relative">
                      <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                        Email
                        <input type="text" id="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value); }} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                      </label>
                    </div>
                  </div>
                </div>
                {/* <div onChange={(e) => { setPic(e.target.value); }} /> */}
                <div className="bg-gray-200 px-4 py-3 sm:px-6 sm:flex sm:justify-center sm:flex-row-reverse">
                  <button type="submit" className="shadow bg-blue-400 hover:bg-green-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mx-2 mb-2">
                    Save
                  </button>
                  <button type="button" className="shadow bg-blue-400 hover:bg-red-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mx-2 mb-2">
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

EditTeacher.propTypes = {
  submission: PropTypes.func,
  oldName: PropTypes.string,
  oldEmail: PropTypes.string,
};

EditTeacher.defaultProps = {
  submission: null,
  oldName: '',
  oldEmail: '',
};
