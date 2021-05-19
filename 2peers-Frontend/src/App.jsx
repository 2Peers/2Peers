import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './data/Login';
import Signup from './data/Signup';
import Page404 from './data/Page404';
import Classroom from './Classroom/Classroom';
import Home from './Home/Home';
import Teacher from './Teacher/Teacher';
// import Message from './Classroom/Message';
// import Navbar from './Reusable/Navbar';
// import Banner from './Reusable/Banner';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/classroom/:id" component={Classroom} />
        <Route exact path="/" component={Home} />
        <Route exact path="/teachers/:id" component={Teacher} />
        <Route path="/" component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
