import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Reusable/Footer';
import NavBar from '../Reusable/Navbar';
import MakeMessage from './MakeMessage';
import Message from './Message';

function Classroom() {
  const { id } = useParams();
  const [classHeading, setClassHeading] = useState('');
  const [messages, setMessages] = useState([]);

  function getMessages() {
    Axios.get(`/classrooms/${id}`)
      .then(({ data }) => {
        setClassHeading(data.classcode);
      });
    Axios.get(`/classrooms/${id}/messages`)
      .then(({ data }) => {
        setMessages(data);
      });
  }

  useEffect(async () => {
    getMessages();
  }, [id]);

  return (
    <div className="classroom w-full">
      <NavBar />
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
            key={data.date}
            text={data.message}
            rating={data.messagerating || 0}
            userId={data.student || data.teacher_id}
            isStudent={Boolean(data.student)}
          />
        ))}
      </div>
      <div className="compose-msg w-full py-1 flex justify-center">
        <MakeMessage update={getMessages} />
      </div>
      <Footer />
    </div>
  );
}

export default Classroom;
