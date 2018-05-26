import {combineReducers} from 'redux';
import {itemsSuccess, itemsError, viewDetails} from './films.js';

const allReducers = combineReducers({
    itemsSuccess,
    itemsError,
    viewDetails
});

export default allReducers