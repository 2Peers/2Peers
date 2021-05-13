import React from 'react';

function Footer() {
  return (
    <div className="w-full bg-purple-500 text-white">
      <div className="xl:px-40 pb-12 lg:px-20 md:px-10 sm:px-5 px-10">
        <div className="w-full pt-12 flex sm:flex-row space-y-2 justify-center">
          <div className="w-full sm:w-2/5 flex flex-row space-y-4 space-x-6">
            <a href="https://www.khanacademy.org/signup" rel="noreferrer" target="_blank" className="opacity-60">
              <img src="../khanacademylogo.png" alt="khan academy" />
            </a>
            <a href="https://www.freecodecamp.org/" rel="noreferrer" target="_blank" className="opacity-60">
              <img src="../free-code-camp-logo.png" alt="free code camp" />
            </a>
            <a href="https://quizlet.com/" rel="noreferrer" target="_blank" className="opacity-60">
              <img src="../quizlet-logo-png.png" alt="quizlet" />
            </a>
          </div>
        </div>
        <div className="opacity-60 pt-2">
          <p>© 2021 2Peers Tutoring App</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
