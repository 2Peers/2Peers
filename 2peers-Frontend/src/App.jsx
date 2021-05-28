import React from 'react';
import socketClient from 'socket.io-client';
import Axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import Login from './data/Login';
import Signup from './data/Signup';
import Page404 from './data/Page404';
import Classroom from './Classroom/Classroom';
import Home from './Home/Home';
import Teacher from './Teacher/Teacher';
import Student from './Student/Student';
import NavBar from './Reusable/Navbar';
import Footer from './Reusable/Footer';

function App() {
  const SERVER = Axios.get('/');
  const socket = socketClient(SERVER);
  console.log(socket);
  socket.on('connection', () => {
    console.log('I am connected with the beack-end');
  });

  return (
    <div className="App">
      <NavBar route="/login" link="Login" />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/classrooms/:id" component={Classroom} />
        <Route exact path="/" component={Home} />
        <Route exact path="/teachers/:id" component={Teacher} />
        {/* { data.valid && data.role === 'student' ?<Redirect to="/students/:id"/>:<Teacher />} */}
        <Route exact path="/student/:id" component={Student} />
        <Route path="/" component={Page404} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
