import React, { Component } from 'react';
import image from '../movie-film.jpg';
import ImageTest from '../movie-film-video.jpg';

class FilmInfo extends Component {
    movieSelected;
    constructor(props) {
        super(props);
        this.state = {emptyList: ''};
    }

    componentDidMount() {
        this.props.getFilms();
        if (this.props.hasError) {
            return <p>Sorry! There was an error loading the films</p>;
        }
        if(this.props.info.length === 0){
            this.setState({
                emptyList: <p className="movie__not-select">Empty list. Please add film or load file</p>
            });
        } else {
            this.setState({
                emptyList: ''
            });
        }
    }

    showListFilms() {
         return this.props.info.map((item, index) =>
                <li className="movie__list-item list-group-item" key={index} index={item.id} onClick={() => this.props.getDetails(item)}>
                    <a href="#top" className="movie__list-link">{item.title}</a>
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
            <div id="details" className="movie__details">
                <div className="movie__img-wrap">
                    <img src={image} className="movie__img" alt="redux" />
                    <div className="movie__img-title">{this.props.selected.title}</div>
                </div>
                <ul data-id={this.props.selected._id} className="list-group movie__detail-list">
                    <li className="movie__details-item list-group-item"><strong>Release:</strong> {this.props.selected.release}</li>
                    <li className="movie__details-item list-group-item"><strong>Format:</strong> {this.props.selected.form}</li>
                    <li className="movie__details-item list-group-item"><strong>Actors:</strong> {this.props.selected.stars}</li>
                </ul>
                <button onClick={() => this.deleteMovie(this.props.selected._id)} type="button" className="movie__details-btn btn btn-lg btn-dark">
                    Delete this Film
                </button>
                <a href="#form" className="movie__details-btn btn btn-lg btn-dark">
                    Add new Film
                </a>
            </div>
        )
    }

    render() {
        if (this.props.selected === null){
            this.movieSelected = <div className="movie__img-wrap">
                                    <p className="movie__not-select movie__img-title">no movie</p>
                                    <img src={ImageTest} className="movie__img movie__img-test" alt="film" />
                                </div>
        } else {
            this.movieSelected = this.showSelectedMovie();
        }

        return (
            <div className="col-12">
                <div className="row">
                    <div className="col-5 movie__list">
                        <h2 className="movie__title">Films:</h2>
                        <ol className="movie__list">
                            {this.state.emptyList}
                            {this.showListFilms()}
                        </ol>
                    </div>
                    <div className="col-7">
                        <h2 className="movie__detail">Details:</h2>
                        {this.movieSelected}
                    </div>
                    <div className="col-12"><hr /></div>
                </div>
            </div>
        );
    }
}

export default FilmInfo;