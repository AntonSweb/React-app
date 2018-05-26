import React, { Component } from 'react';

class FilmInfo extends Component {

    btnClick(e) {
        // console.log(e.target.textContent);
        // return this.props.setFilm(e.target.textContent);
    }

    componentDidMount() {
        this.props.getFilms();
    }

    showListTitle() {
     return this.props.info.map((item) =>
            <li
                key={item.id}
                onClick={() => this.props.getDetails(item)}>
                {item.title}
            </li>
     )
    }

    render() {
        if (this.props.hasError) {
            return <p>Sorry! There was an error loading the films</p>;
        }
        return (
            <div className="movie">
                <h2 className="movie__title">Films:</h2>
                <ul className="movie__title-list">
                    {this.showListTitle()}
                </ul>
                <hr />
                <h2 className="movieDetail">Details:</h2>
                <ul>
                    <li>{this.props.active.release}</li>
                    <li>{this.props.active.form}</li>
                    <li>{this.props.active.stars}</li>
                </ul>
            </div>
        );
    }
}

export default FilmInfo;