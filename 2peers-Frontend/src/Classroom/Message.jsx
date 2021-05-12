import React from 'react';

export default function Message() {
  // const {name, email, message} = props;

  return (
    <div className="message rounded overflow-hidden shadow-lg max-w-xs w-1/6">
      <div className="rating w-full">
        ★★★★☆
      </div>
      <div className="message-content">
        <div className="message-composer">
          Name
        </div>
        <div className="message-txt">
          Message text
        </div>
      </div>
    </div>
  );
}
