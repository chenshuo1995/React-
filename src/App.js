import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './view/login/Login';
import Home from './view/home/Home';
class App extends Component {
    state = {
        show: false
    }
    render() {
        return (
            <Router>
                <Route path='/login' component={Login} />
                <Route path='/' exact component={Login} />
                <Route path='/home/:name' component={Home} />
            </Router> 
        );
    }
    
}

export default App;