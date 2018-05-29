import React, { Component } from 'react';
import image from '../../movie-film.jpg';

class FilmDetails extends Component {
    deleteMovie(id){
        this.props.removeMovie(id);
        this.props.updateList();
        this.props.deleteDetails(null);
    }

    render(){
        return(
            <div id="details" className="movie__details">
                <div className="movie__img-wrap">
                    <img src={image} className="movie__img" alt="redux" />
                    <div className="movie__img-title">{this.props.details.title}</div>
                </div>
                <ul data-id={this.props.details._id} className="list-group movie__detail-list">
                    <li className="movie__details-item list-group-item"><strong>Release:</strong> {this.props.details.release}</li>
                    <li className="movie__details-item list-group-item"><strong>Format:</strong> {this.props.details.form}</li>
                    <li className="movie__details-item list-group-item"><strong>Actors:</strong> {this.props.details.stars}</li>
                </ul>
                <button onClick={() => this.deleteMovie(this.props.details._id)} type="button" className="movie__details-btn btn btn-lg btn-dark">
                    Delete this Film
                </button>
                <a href="#form" className="movie__details-btn btn btn-lg btn-dark">
                    Add new Film
                </a>
            </div>
        )
    }
}

export default FilmDetails