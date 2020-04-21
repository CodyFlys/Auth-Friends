import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './Login';

const Nav = () => {
    return (
            <div className="App">
                <Link to="/login">Login</Link>
                <Link to="/">Home</Link>
            </div>
    )
}

export default Nav