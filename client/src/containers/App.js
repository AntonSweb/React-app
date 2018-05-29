import React, { Component } from 'react';
import Header from '../components/Header';
import FilmInfo from '../components/FilmInfo';
import NewFilms from '../components/AddFilm';
import LoadFilms from '../components/LoadFile';
import SearchFilmIn from '../components/Search';
import '../App.css';

class App extends Component {

    render() {
        return (
            <div className="App movie bg-light">
                <div className="container-fluid">
                    <div className="row">
                        <Header />
                        <SearchFilmIn />
                        <FilmInfo />
                        <div className="col-12">
                            <div className="row">
                                <h3 className="col-12 movie__new-title">New films there:</h3>
                                <NewFilms />
                                <LoadFilms />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App
