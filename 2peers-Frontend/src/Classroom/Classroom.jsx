import React from 'react';
import Footer from '../Reusable/Footer';
import NavBar from '../Reusable/Navbar';
import MakeMessage from './MakeMessage';
import Message from './Message';

function Classroom() {
  return (
    <div className="classroom w-full">
      <NavBar />
      <div className="Classname flex justify-center font-bold p-5">
        <p>Class Name</p>
      </div>
      <div className="msg-container w-full p-3">
        {/* map when connected to backend */}
        <Message />
      </div>
      <div className="compose-msg w-full py-1 flex justify-center">
        <MakeMessage />
      </div>
      <Footer />
    </div>
  );
}

export default Classroom;
