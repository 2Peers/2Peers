import React from 'react';
import MakeMessage from './MakeMessage';
import Message from './Message';

function Classroom() {
  return (
    <div className="classroom">
      <div className="msg-container">
        {/* map when connected to backend */}
        <Message />
      </div>
      <div className="compose-msg">
        <MakeMessage />
      </div>
    </div>
  );
}

export default Classroom;
