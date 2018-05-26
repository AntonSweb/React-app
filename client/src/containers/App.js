import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import {connect} from 'react-redux';
import FilmInfo from '../components/FilmInfo';
// import loadFilmAction from '../actions/actionFilm';
import {asyncGetFilms} from '../actions/actionFilm'

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <FilmInfo info={this.props.info} getFilms={this.props.onGetFilms}/>
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
        // setFilmFunction: list => {
            // dispatch(loadFilmAction(list))
        // },
        onGetFilms: () => {
            dispatch(asyncGetFilms());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
