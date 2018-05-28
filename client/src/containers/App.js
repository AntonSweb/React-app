import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../components/Header';
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
import '../App.css';

class App extends Component {

    render() {
        return (
            <div className="App movie bg-light">
                <div className="container-fluid">
                    <div className="row">
                        <Header />
                        <FilmInfo
                            hasError={this.props.hasError}
                            info={this.props.items}
                            selected={this.props.activeItem}
                            getFilms={this.props.getFilmsFunction}
                            getDetails={this.props.getDetailsFunction}
                            deleteFilm={this.props.deleteFilmFunction}
                        />
                        <div className="col-12">
                            <div className="row">
                                <h3 className="col-12 movie__new-title">New films there:</h3>
                                <NewFilms
                                    getFilms={this.props.getFilmsFunction}
                                    newFilm={this.props.addFilmFunction}
                                    getDetails={this.props.getDetailsFunction}
                                />
                                <LoadFilms
                                    info={this.props.items}
                                    loadFilms={this.props.loadFilmsFunction}
                                    getFilms={this.props.getFilmsFunction}
                                    getDetails={this.props.getDetailsFunction}
                                    deleteAll={this.props.deleteAllFilmsFunction}
                                />
                            </div>
                        </div>
                    </div>
                </div>
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
