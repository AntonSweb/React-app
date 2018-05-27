import {combineReducers} from 'redux';
import {itemsSuccess, itemsError, viewDetails, addNewFilm, removeFilm} from './films.js';

const allReducers = combineReducers({
    itemsSuccess,
    itemsError,
    viewDetails,
    addNewFilm,
    removeFilm
});

export default allReducers