import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter,
} from 'react-router-dom';
import Login from './data/Login';
import Signup from './data/Signup';
import Page404 from './data/Page404';
import Classroom from './Classroom/Classroom';
import Home from './Home/Home';
import Teacher from './Teacher/Teacher';
import Student from './Student/Student';
import NavBar from './Reusable/Navbar';
import ProtectedRoute from './AuthRoutes/ProtectedRoute';
import TwoPeersProvider from './context/TwoPeersProvider';

function App() {
  return (
    <BrowserRouter>
      <TwoPeersProvider>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/" component={Home} />
            <ProtectedRoute exact path="/classrooms/:id" component={Classroom} />
            <ProtectedRoute exact path="/teachers/:id" component={Teacher} />
            <ProtectedRoute exact path="/student/:id" component={Student} />
            <Route path="/" component={Page404} />
          </Switch>
        </div>
      </TwoPeersProvider>
    </BrowserRouter>
  );
}

export default App;
