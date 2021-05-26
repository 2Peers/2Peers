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
  const [rated, setRated] = useState(false);
  const [messageRating, setMessageRating] = useState('');
  const userInfo = useContext(TwoPeersContext).data.user.id;
  const userData = useContext(TwoPeersContext).data;

  const checkRating = async () => {
    if (userData.role === 'student') {
      const info = await Axios.post(`/student/${userInfo}`, {
        messageid: id,
      });
      return info;
    }
    const info = await Axios.post(`/teachers/${userInfo}/exists`, {
      messageid: id,
    });
    return info;
  };

  useEffect(() => {
    if (userId === userInfo && (userData.role === 'student') === isStudent) {
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
    } else {
      checkRating().then((got) => {
        if (got.data) {
          let newRating = '';
          for (let i = 0; i < 5; i += 1) {
            if (i < got.data.rating) {
              newRating += '★';
            } else {
              newRating += '☆';
            }
          }
          setMessageRating(newRating);
          setRated(true);
        } else {
          setMessageRating('☆☆☆☆☆');
        }
      });
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
  }, []);

  function options() {
    setOptions((prev) => !prev);
  }

  const postRating = (idx) => {
    if (userId !== userInfo || (userData.role === 'student') !== isStudent) {
      if (!rated) {
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
        if (userData.role === 'student') {
          fetch(`/messages/${id}`, fetchOptions);
        } else {
          fetch(`/teachers/${id}/rating`, fetchOptions);
        }
        let newRating = '';
        for (let i = 0; i < 5; i += 1) {
          if (i < idx) {
            newRating += '★';
          } else {
            newRating += '☆';
          }
        }
        setMessageRating(newRating);
        setRated(true);
      } else {
        if (userData.role === 'student') {
          Axios.patch(`/messages/${id}/rating`, {
            rating: idx,
            id: raterId,
          });
        } else {
          Axios.patch(`/teachers/${id}/rating`, {
            rating: idx,
            id: raterId,
          });
        }
        let newRating = '';
        for (let i = 0; i < 5; i += 1) {
          if (i < idx) {
            newRating += '★';
          } else {
            newRating += '☆';
          }
        }
        setMessageRating(newRating);
      }
    }
  };

  return (
    <div className={(userInfo === userId) && (userData.role === 'student') === isStudent ? 'flex justify-end' : ''}>
      <div className="message p-3 bg-green-100 ml-2 my-3 rounded overflow-hidden shadow-lg max-w-xs w-44">
        {
          isStudent ? (
            <div className={
              rated ? 'rating w-full flex justify-center text-green-500' : 'rating w-full flex justify-center'
           }>
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
      {(optionsVisible && userInfo === userId && (userData.role === 'student') === isStudent)
        ? <EditMessage isStudent={isStudent} text={text} submission={setOptions} id={id} /> : null}
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
