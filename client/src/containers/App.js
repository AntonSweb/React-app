import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import {connect} from 'react-redux';
import FilmInfo from '../components/FilmInfo';
import setFilmAction from '../actions/actionFilm'

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <FilmInfo info={this.props.info} setFilm={this.props.setFilmFunction}/>
            </div>
        );
    }

}

function mapStateToProps(state){
    return {
        info: state.filmsInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setFilmFunction: film => {
            dispatch(setFilmAction(film))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
