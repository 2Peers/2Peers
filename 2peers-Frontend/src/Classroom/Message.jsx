import Axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import EditMessage from './EditMessage';

export default function Message({
  text, isStudent, userId, rating,
}) {
  const [optionsVisible, setOptions] = useState(false);
  const [name, setName] = useState('');
  const [messageRating, setMessageRating] = useState('');

  useEffect(() => {
    for (let i = 0; i < 5; i += 1) {
      if (rating === 0) {
        setMessageRating('☆☆☆☆☆');
        break;
      }
      if (i > rating - 1) setMessageRating((prev) => `${prev}☆`);
      if (i <= rating - 1) setMessageRating((prev) => `${prev}★`);
    }
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
    setOptions((prev) => !prev);
  }

  return (
    <div>
      <div onClick={options} onKeyDown={options} role="button" tabIndex={0} className="message p-3 bg-green-100 ml-2 my-3 rounded overflow-hidden shadow-lg max-w-xs w-44">
        {
          isStudent ? (
            <div className="rating w-full">
              {messageRating}
            </div>
          ) : (
            null
          )
        }
        <div className="message-content flex justify-start flex-col pl-3">
          <div className="message-composer font-bold text-left">
            { name }
          </div>
          <div className="message-txt text-left">
            { text }
          </div>
        </div>
      </div>
      {optionsVisible ? <EditMessage text={text} submission={setOptions} /> : null}
    </div>
  );
}

Message.propTypes = {
  text: PropTypes.string,
  rating: PropTypes.number,
  isStudent: PropTypes.bool,
  userId: PropTypes.number,
};

Message.defaultProps = {
  text: null,
  rating: 0,
  isStudent: true,
  userId: 1,
};
