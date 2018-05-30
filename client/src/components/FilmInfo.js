import React, { Component } from 'react';
import {connect} from 'react-redux';
import {asyncGetFilms, viewDetails, deleteFilm} from '../actions/actionFilm'
import ImageTest from '../movie-film-video.jpg';
import FilmDetails from './local/Details';
import SortFilms from './local/Sort';

class FilmInfo extends Component {
    movieSelected = '';
    emptyList = '';
    sortText =  '';
    constructor(props) {
        super(props);
        this.state = {type: 'title'};
    }
    componentDidMount() {
        this.props.getFilmsFunction();
    }
    showSelectedMovie() {
        return(
            <FilmDetails />
        )
    }
    showListFilms() {
        return (
            <ol className="movie__list">
                {this.props.items.map((item, index) =>
                    <a href="#top" className="movie__list-link" key={index} >
                        <li className="movie__list-item list-group-item" onClick={() => this.props.getDetailsFunction(item)}>
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
            <SortFilms />
        )
    }

    render() {
        if (this.props.activeItem === null){
            this.movieSelected = this.showEmtyMovie();
        } else {
            this.movieSelected = this.showSelectedMovie();
        }
        if (this.props.items.length === 0){
            this.emptyList = this.showEmtyList();
            this.sortText = ''
        } else {
            this.sortText = this.showSortBtn();
            this.emptyList = ''
        }

        return (
            <div className="col-12">
                <div className="row">
                    <div className="col-12 col-md-6 movie__list">
                        <h2 className="movie__title">Films:</h2>
                        {this.emptyList}
                        {this.sortText}
                        {this.showListFilms()}
                    </div>
                    <div className="col-12 col-md-6">
                        <h2 className="movie__detail">Details:</h2>
                        {this.movieSelected}
                    </div>
                    <div className="col-12"><hr /></div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    if(state.searchItem[1] === 'stars') {
        return {
            items: state.itemsSuccess.filter(item => item.stars.toLowerCase().includes(state.searchItem[0])),
            activeItem: state.viewDetails
        }
    } else {
       return {
           items: state.itemsSuccess.filter(item => item.title.toLowerCase().includes(state.searchItem[0])),
           activeItem: state.viewDetails
       }
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

export default connect(mapStateToProps, mapDispatchToProps)(FilmInfo);