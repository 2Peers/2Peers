import Axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TwoPeersContext from '../context/TwoPeersContext';
import MakeMessage from './MakeMessage';
import Message from './Message';

function Classroom({ ...props }) {
  const info = useContext(TwoPeersContext).data;
  // console.log(info);
  const infoCheck = () => {
    if (info.user) {
      if (info.checkbox) {
        return `/teachers/${info.user.id}`;
      }
      return `/student/${info.user.id}`;
    }
    return '';
  };
  // const userId = lastUrl.split('/')[2];
  // const isStudent = (lastUrl.split('/')[1] === 'students');
  // console.log(userId, isStudent);
  const { ...match } = props;
  const { params: { id } } = match;
  const [classHeading, setClassHeading] = useState('');
  const [messages, setMessages] = useState([]);

  const getMessages = () => {
    Axios.get(`/classrooms/${id}`)
      .then(({ data }) => {
        setClassHeading(data.classcode);
      });
    Axios.get(`/classrooms/${id}/messages`)
      .then(({ data }) => {
        setMessages(data);
      });
  };

  const checkMessages = () => {
    getMessages();
    setTimeout(checkMessages, 5000);
  };

  useEffect(async () => {
    getMessages();
    checkMessages();
  }, [id]);

  return (
    <div className="classroom w-full">
      <div className="Classname flex justify-center font-bold p-5">
        <div className="text-2xl text-gray-600 text-center">
          <p>
            Class Code:
            <br />
            { classHeading }
          </p>
          <Link to={infoCheck}>
            <button
              type="button"
              className="flex-shrink-0 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-sm border-4 text-white py-1 px-2 rounded"
            >
              Back
            </button>
          </Link>
        </div>
      </div>
      <hr className="mx-5" />
      <div className="msg-container w-full pb-80">
        {/* map when connected to backend */}
        {messages.map((data) => (
          <Message
            key={`${data.date}${Boolean(data.student)}`}
            id={data.id}
            text={data.message}
            userId={data.student || data.teacher_id}
            raterId={info.user ? info.user.id : 0}
            isStudent={Boolean(data.student)}
          />
        ))}
      </div>
      <div className="compose-msg w-full py-3 flex justify-center">
        <MakeMessage
          userId={info.user ? info.user.id : 0}
          isStudent={info ? !(info.checkbox) : true}
          update={getMessages}
          {...props}
        />
      </div>
    </div>
  );
}

export default Classroom;
