import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Reusable/Footer';
import NavBar from '../Reusable/Navbar';
import MakeMessage from './MakeMessage';
import Message from './Message';

function Classroom() {
  const { id } = useParams();
  const [messages, setMessages] = useState([]);

  useEffect(async () => {
    Axios.get(`/classrooms/${id}/messages`)
      .then(({ data }) => {
        setMessages(data);
      });
  }, [id]);
  return (
    <div className="classroom w-full">
      <NavBar />
      <div className="Classname flex justify-center font-bold p-5">
        <p>Class Name</p>
      </div>
      <div className="msg-container w-full p-3">
        {/* map when connected to backend */}
        {messages.map((data) => (
          <Message
            key={data.date}
            text={data.message}
            userId={data.student || data.teacher_id}
            isStudent={Boolean(data.student)}
          />
        ))}
      </div>
      <div className="compose-msg w-full py-1 flex justify-center">
        <MakeMessage />
      </div>
      <Footer />
    </div>
  );
}

export default Classroom;
