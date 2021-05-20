import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Footer from '../Reusable/Footer';
import MakeMessage from './MakeMessage';
import Message from './Message';

function Classroom() {
  const history = useHistory();
  console.log(history.pathes);
  const lastUrl = history.pathes[history.pathes.length - 1];
  const userId = lastUrl.split('/')[2];
  const isStudent = (lastUrl.split('/')[1] === 'students');
  console.log(userId, isStudent);
  const { id } = useParams();
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
        <p className="text-2xl text-gray-600 text-center">
          Class Code:
          <br />
          { classHeading }
        </p>
      </div>
      <hr className="mx-5" />
      <div className="msg-container w-full p-3">
        {/* map when connected to backend */}
        {messages.map((data) => (
          <Message
            key={`${data.date}-${Boolean(data.student)}`}
            id={data.id}
            text={data.message}
            userId={data.student || data.teacher_id}
            isStudent={Boolean(data.student)}
          />
        ))}
      </div>
      <div className="compose-msg w-full py-1 flex justify-center">
        <MakeMessage user={userId} isStudent={isStudent} update={getMessages} />
      </div>
      <Footer />
    </div>
  );
}

export default Classroom;
