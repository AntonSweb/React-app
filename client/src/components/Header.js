import React, { Component } from 'react';
import logo from '../redux.svg';

class Header extends Component {
    render(){
        return(
            <header id="top" className="col-12 App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to movies app</h1>
            </header>
        )
    }
}

export default Header

