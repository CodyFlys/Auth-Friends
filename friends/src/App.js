import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from './components/Home'
import Login from './components/Login'
import FriendsList from './components/FriendsList'
import PrivateRoute from './components/ProtectedRoute'

function App() {
  return (
    <Router>
      <div className='myApp'>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Login}/>
          <PrivateRoute path='/friends' component={FriendsList}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
