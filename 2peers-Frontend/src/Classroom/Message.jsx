import Axios from 'axios';
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import TwoPeersContext from '../context/TwoPeersContext';
import EditMessage from './EditMessage';

export default function Message({
  text, isStudent, userId, id, raterId,
}) {
  const [optionsVisible, setOptions] = useState(false);
  const [name, setName] = useState('');
  const [messageRating, setMessageRating] = useState('');
  const userInfo = useContext(TwoPeersContext).data.user.id;

  useEffect(() => {
    Axios.get(`/messages/${id}/rating`)
      .then(({ data }) => {
        setMessageRating('');
        for (let i = 0; i < 5; i += 1) {
          if (data === 0) {
            setMessageRating('☆☆☆☆☆');
            break;
          }
          if (i > data - 1) setMessageRating((prev) => `${prev}☆`);
          if (i <= data - 1) setMessageRating((prev) => `${prev}★`);
        }
      });
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
  }, []);

  function options() {
    setOptions((prev) => !prev);
  }

  const postRating = (idx) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        rating: idx,
        id: raterId,
      }),
    };
    fetch(`/messages/${id}`, fetchOptions);
  };

  return (
    <div className={userInfo === userId ? 'flex justify-end' : ''}>
      <div className="message p-3 bg-green-100 ml-2 my-3 rounded overflow-hidden shadow-lg max-w-xs w-44">
        {
          isStudent ? (
            <div className="rating w-full flex justify-center">
              {messageRating.split('').map((star, idx) => <button type="button" onClick={() => { postRating(idx + 1); }}>{star}</button>)}
            </div>
          ) : (
            null
          )
        }
        <div onClick={options} onKeyDown={options} role="button" tabIndex={0} className="message-content flex justify-start flex-col pl-3">
          <div className="message-composer font-bold text-left">
            { name }
          </div>
          <div className="message-txt text-left">
            { text }
          </div>
        </div>
      </div>
      {optionsVisible ? <EditMessage text={text} submission={setOptions} id={id} /> : null}
    </div>
  );
}

Message.propTypes = {
  text: PropTypes.string,
  isStudent: PropTypes.bool,
  userId: PropTypes.number,
  raterId: PropTypes.number,
  id: PropTypes.number,
};

Message.defaultProps = {
  text: null,
  isStudent: true,
  userId: 1,
  raterId: 1,
  id: null,
};
