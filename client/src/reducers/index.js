import {combineReducers} from 'redux';
import {
    itemsSuccess,
    itemsError,
    viewDetails,
    addNewFilm,
    removeFilm,
    removedAllFilms
} from './films.js';

const allReducers = combineReducers({
    itemsSuccess,
    itemsError,
    viewDetails,
    addNewFilm,
    removeFilm,
    removedAllFilms
});

export default allReducers