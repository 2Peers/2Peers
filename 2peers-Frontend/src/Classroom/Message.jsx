import React, { useState } from 'react';

export default function Message() {
  // const {name, email, message} = props;
  const [optionsVisible, setOptions] = useState(false);

  function options() {
    console.log(optionsVisible);
    setOptions((prev) => !prev);
  }

  return (
    <div onClick={options} onKeyDown={options} role="button" tabIndex={0} className="message p-3 bg-green-100 ml-2 my-3 rounded overflow-hidden shadow-lg max-w-xs w-1/6">
      <div className="rating w-full">
        ★★★★☆
      </div>
      <div className="message-content flex justify-start flex-col pl-3">
        <div className="message-composer font-bold text-left">
          Name
        </div>
        <div className="message-txt text-left">
          Message text
        </div>
      </div>
    </div>
  );
}
