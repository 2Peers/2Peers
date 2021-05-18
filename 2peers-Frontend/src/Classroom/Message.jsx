import Axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

export default function Message({ text, isStudent, userId }) {
  // const {name, email, message, rating} = props;
  const [optionsVisible, setOptions] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    if (isStudent) {
      Axios.get(`/student/${userId}`)
        .then(({ data }) => {
          setName(data.name);
        });
    } else {
      Axios.get(`/teachers/${userId}`)
        .then(({ data }) => {
          setName(data.name);
        });
    }
  }, [text]);

  function options() {
    console.log(optionsVisible);
    setOptions((prev) => !prev);
  }

  return (
    <div onClick={options} onKeyDown={options} role="button" tabIndex={0} className="message p-3 bg-green-100 ml-2 my-3 rounded overflow-hidden shadow-lg max-w-xs w-44">
      <div className="rating w-full">
        ★★★★☆
      </div>
      <div className="message-content flex justify-start flex-col pl-3">
        <div className="message-composer font-bold text-left">
          { name }
        </div>
        <div className="message-txt text-left">
          { text }
        </div>
      </div>
    </div>
  );
}

Message.propTypes = {
  text: PropTypes.string,
  isStudent: PropTypes.bool,
  userId: PropTypes.number,
};

Message.defaultProps = {
  text: null,
  isStudent: true,
  userId: 1,
};
