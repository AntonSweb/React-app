import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import {connect} from 'react-redux';
import FilmInfo from '../components/FilmInfo';
import NewFilms from '../components/AddFilm';
import LoadFilms from '../components/LoadFile';
import {
    asyncGetFilms,
    viewDetails,
    addNewFilm,
    deleteFilm,
    loadFilms,
    deleteAllFilms
} from '../actions/actionFilm'

class App extends Component {

    render() {
        return (
            <div className="movie App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <FilmInfo
                    hasError={this.props.hasError}
                    info={this.props.items}
                    selected={this.props.activeItem}
                    getFilms={this.props.getFilmsFunction}
                    getDetails={this.props.getDetailsFunction}
                    deleteFilm={this.props.deleteFilmFunction}
                />
                <NewFilms
                    getFilms={this.props.getFilmsFunction}
                    newFilm={this.props.addFilmFunction}
                    getDetails={this.props.getDetailsFunction}
                    deleteAll={this.props.deleteAllFilmsFunction}
                />
                <LoadFilms
                    loadFilms={this.props.loadFilmsFunction}
                    getFilms={this.props.getFilmsFunction}
                />
            </div>
        );
    }

}

function mapStateToProps(state){
    return {
        items: state.itemsSuccess,
        hasError: state.itemsError,
        activeItem: state.viewDetails
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getFilmsFunction: () => {
            dispatch(asyncGetFilms());
        },
        getDetailsFunction: film => {
            dispatch(viewDetails(film))
        },
        addFilmFunction: newFilm => {
            dispatch(addNewFilm(newFilm));
        },
        loadFilmsFunction: loadedFilms => {
            dispatch(loadFilms(loadedFilms))
        },
        deleteFilmFunction: id => {
            dispatch(deleteFilm(id));
        },
        deleteAllFilmsFunction: () => {
            dispatch(deleteAllFilms());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
