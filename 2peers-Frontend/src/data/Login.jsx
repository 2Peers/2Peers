import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import TwoPeersContext from '../context/TwoPeersContext';
import Footer from '../Reusable/Footer';

function Login() {
  const {
    // data,
    userEmail,
    setEmail,
    userPassword,
    setPassword,
    SignIn,
    checkbox,
    setCheck,
    loginErr,
  } = useContext(TwoPeersContext);
  // console.log(data);
  return (
    <>
      <div data-testid="login-form" className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto h-12 w-auto animate-bounce" src="https://img.icons8.com/nolan/64/brain.png" alt="2peers icon" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p data-testid="login-subheading" className="mt-2 text-center text-sm text-gray-600">
              Lets get to tutoring!
            </p>
          </div>
          <form className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label data-testid="email-label" htmlFor="email-address">
                  Email address
                  <input data-testid="email-input" id="email-address" name="email" value={userEmail} onChange={(e) => { setEmail(e.target.value); }} type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                </label>
              </div>
              <br />
              <div>
                <label data-testid="password-label" htmlFor="password">
                  Password
                  <input data-testid="password-input" id="password" name="password" value={userPassword} onChange={(e) => { setPassword(e.target.value); }} type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                </label>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <label htmlFor="checkbox" className="ml-2 block text-sm text-gray-900">
                  <input id="checkbox" name="checkbox" type="checkbox" checked={checkbox} onChange={() => { setCheck((prev) => !prev); }} className="h-4 w-4 mr-2 mb-2 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                  Are you a teacher?
                </label>
              </div>
            </div>
            {loginErr && (
              <p className="text-xs text-red-500">oops, looks like you entered the wrong credentials. Try again!</p>
            )}
            <div>
              <button data-testid="signin-button" type="submit" onClick={SignIn} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg className="h-5 w-5 text-white animate-pulse group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Sign In
              </button>
            </div>
          </form>
          <div className="flex items-center justify-between">
            <div className="flex items-center">Dont have an account?</div>
            <div className="text-sm">
              <Link data-testid="signup-link" to="/signUp">
                <p className="font-medium text-indigo-600 hover:text-indigo-500">Sign up here!</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
