import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './data/Login';
import Signup from './data/Signup';
import Page404 from './data/Page404';
import Home from './Home/Home';
import Teacher from './Teacher/Teacher';
import Student from './Student/Student';
// import Message from './Classroom/Message';
// import Navbar from './Reusable/Navbar';
// import Banner from './Reusable/Banner';
import TwoPeersContext from './context/TwoPeersContext';

function App() {
  const { data } = useContext(TwoPeersContext);
  // const { passedData } = data;
  // console.log('USER:', passedData);
  console.log('USER:', data);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {data.valid ? <Redirect to={`/teachers/${data.user.id}`} /> : <Login />}
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/teachers/:id" component={Teacher} />
        <Route exact path="/students/:id" component={Student} />
        <Route path="/" component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
