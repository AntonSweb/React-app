import React, { Component } from 'react';

class FilmInfo extends Component {
    movieSelected;

    componentDidMount() {
        this.props.getFilms();
    }

    showListFilms() {
     return this.props.info.map((item, index) =>
            <li
                key={index}
                index={item.id}
                onClick={() => this.props.getDetails(item)}>
                {item.title}
            </li>
     )
    }

    deleteMovie(id){
        this.props.deleteFilm(id);
        this.props.getFilms();
        this.props.getDetails(null);
    }

    showSelectedMovie() {
        return(
            <div className="movie__delete">
                <ul data-id={this.props.selected._id} className="movie__detail-list">
                    <li>{this.props.selected.release}</li>
                    <li>{this.props.selected.form}</li>
                    <li>{this.props.selected.stars}</li>
                </ul>
                <button onClick={() => this.deleteMovie(this.props.selected._id)}>
                    Delete this Film
                </button>
            </div>
        )
    }

    render() {
        if (this.props.hasError) {
            return <p>Sorry! There was an error loading the films</p>;
        }
        if (this.props.selected === null){
            this.movieSelected = <p className="movie__not-select">Please select film</p>
        } else {
            this.movieSelected = this.showSelectedMovie();
        }

        return (
            <div className="movie__list">
                <h2 className="movie__title">Films:</h2>
                <ol className="movie__title-list">
                    {this.showListFilms()}
                </ol>
                <hr />
                <h2 className="movie__detail">Details:</h2>
                {this.movieSelected}
            </div>
        );
    }
}

export default FilmInfo;