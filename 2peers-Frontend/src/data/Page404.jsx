import React from 'react';
import { Link } from 'react-router-dom';

function Page404() {
  return (
    <>
      <Link to="/">
        <img alt="nooooo!" src="https://miro.medium.com/max/4800/1*EQisBuMOijQT8woW0Jn6pA.jpeg" />
      </Link>
      <div>Click the image to be redirected!</div>
    </>
  );
}

export default Page404;
