import React, { Component } from 'react';
import ImageTest from '../movie-film-video.jpg';
import FilmDetails from './local/Details';

class FilmInfo extends Component {
    movieSelected;
    emptyList;
    sort;

    componentDidMount() {
        this.props.getFilms();
    }

    sortListFilms() {
        if(this.props.info.length !== 0) {
            this.props.info.sort((a, b) => {
                if (a.title < b.title) return -1;
                if (a.title > b.title) return 1;
                return 0;
            });
            this.props.getDetails(this.props.info[0]);
        }
    }

    showSelectedMovie() {
        return(
            <FilmDetails
                removeMovie={this.props.deleteFilm}
                updateList={this.props.getFilms}
                deleteDetails={this.props.getDetails}
                details={this.props.selected} />
        )
    }

    showListFilms() {
        return (
            <ol className="movie__list">
                {this.props.info.map((item, index) =>
                    <a href="#top" className="movie__list-link" key={index} >
                        <li className="movie__list-item list-group-item" onClick={() => this.props.getDetails(item)}>
                            {item.title}
                        </li>
                    </a>
                )}
            </ol>
        )
    }

    showEmtyMovie() {
        return (
            <div className="movie__img-wrap">
                <p className="movie__not-select movie__img-title">no movie</p>
                <img src={ImageTest} className="movie__img movie__img-test" alt="film" />
            </div>
        )
    }

    showEmtyList() {
        return (
            <div className="movie__not-wrap"><p className="movie__not-select">Empty list. Please add films</p></div>
        )
    }

    showSortBtn() {
        return (
            <ol className="movie_sort"><span onClick={this.sortListFilms.bind(this)} className="list-group-item movie__sortByTitle">Sort</span></ol>
        )
    }

    render() {
        if (this.props.selected === null){
            this.movieSelected = this.showEmtyMovie();
        } else {
            this.movieSelected = this.showSelectedMovie();
        }

        if(this.props.info.length === 0){
            this.emptyList = this.showEmtyList();
            this.sort = ''
        } else {
            this.sort = this.showSortBtn();
            this.emptyList = ''
        }

        return (
            <div className="col-12">
                <div className="row">
                    <div className="col-12 col-md-6 movie__list">
                        <h2 className="movie__title">Films:</h2>
                        {this.emptyList}
                        {this.sort}
                        {this.showListFilms()}
                    </div>
                    <div className="col-12 col-md 6">
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