import React, { Component } from 'react';
import {connect} from 'react-redux';
import image from '../../movie-film.jpg';
import {asyncGetFilms, viewDetails, deleteFilm} from '../../actions/actionFilm'

class FilmDetails extends Component {
    deleteMovie(id){
        this.props.deleteFilmFunction(id);
        this.props.getFilmsFunction();
        this.props.getDetailsFunction(null);
    }

    render(){
        return(
            <div id="details" className="movie__details">
                <div className="movie__img-wrap">
                    <img src={image} className="movie__img" alt="redux" />
                    <div className="movie__img-title">{this.props.activeItem.title}</div>
                </div>
                <ul data-id={this.props.activeItem._id} className="list-group movie__detail-list">
                    <li className="movie__details-item list-group-item"><strong>Release:</strong> {this.props.activeItem.release}</li>
                    <li className="movie__details-item list-group-item"><strong>Format:</strong> {this.props.activeItem.form}</li>
                    <li className="movie__details-item list-group-item"><strong>Actors:</strong> {this.props.activeItem.stars}</li>
                </ul>
                <button onClick={() => this.deleteMovie(this.props.activeItem._id)} type="button" className="movie__details-btn btn btn-lg btn-dark">
                    Delete this Film
                </button>
                <a href="#form" className="movie__details-btn btn btn-lg btn-dark">
                    Add new Film
                </a>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
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
        deleteFilmFunction: id => {
            deleteFilm(id)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetails);