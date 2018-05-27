import React, { Component } from 'react';

class FilmInfo extends Component {
    movieSelected;

    componentDidMount() {
        this.props.getFilms();
    }

    showListTitle() {
     return this.props.info.map((item) =>
            <li
                key={item.id}
                index={item.id}
                onClick={() => this.props.getDetails(item)}>
                {item.title}
            </li>
     )
    }

    deleteMovie(id){
        this.props.deleteFilm(id);
        this.props.getFilms();
        this.props.getDetails(null)
    }

    noMovieSelected() {
        return(
            <p className="movie__not-select">Please select film</p>
        )
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
                    Delete this Film</button>
            </div>
        )
    }

    render() {
        if (this.props.hasError) {
            return <p>Sorry! There was an error loading the films</p>;
        }
        if (this.props.selected === null){
            this.movieSelected = this.noMovieSelected();
        } else {
            this.movieSelected = this.showSelectedMovie();
        }

        return (
            <div className="movie__list">
                <h2 className="movie__title">Films:</h2>
                <ol className="movie__title-list">
                    {this.showListTitle()}
                </ol>
                <hr />
                <h2 className="movie__detail">Details:</h2>
                {this.movieSelected}
            </div>
        );
    }
}

export default FilmInfo;