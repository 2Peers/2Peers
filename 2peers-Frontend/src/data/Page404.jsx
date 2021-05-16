import React from 'react';
import { Link } from 'react-router-dom';

function Page404() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <img src="https://media3.giphy.com/media/3o6Zt6ML6BklcajjsA/giphy.gif?cid=ecf05e47rw0r5doyjeza03jlu07e1y1mbth44mu36ogllv9n&rid=giphy.gif&ct=g" alt="error gif" />
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="block">Are you lost?</span>
          <span className="block text-indigo-600">This page does not exist!</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link to="/login">
              <p className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Back to Home
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page404;
