import React, { Component } from 'react';
import Header from '../header/Header';
import Nav from '../nav/Nav';

class App extends Component {
    state = {
        show: false
    }
    render() {
        return (
            <div className="react-wrapper">
                <div className="header">
                    <Header />
                </div>
                <div className="content">
                    <Nav />
                </div>
            </div>

        );
    }
    
}

export default App;