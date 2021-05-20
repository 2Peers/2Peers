import React, { useContext } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Login from './data/Login';
import Signup from './data/Signup';
import Page404 from './data/Page404';
import Classroom from './Classroom/Classroom';
import Home from './Home/Home';
import Teacher from './Teacher/Teacher';
import Student from './Student/Student';
import NavBar from './Reusable/Navbar';
import Footer from './Reusable/Footer';
import TwoPeersContext from './context/TwoPeersContext';

function App() {
  const { data } = useContext(TwoPeersContext);
  console.log(data);
  const history = useHistory();
  history.pathes = history.pathes
    ? [...history.pathes, history.location.pathname] : [history.location.pathname];
  console.log(history);
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
