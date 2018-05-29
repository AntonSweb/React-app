import {combineReducers} from 'redux';
import {itemsSuccess, itemsError, viewDetails} from './films.js';
import {searchItem} from './search.js';

const allReducers = combineReducers({
    itemsSuccess,
    itemsError,
    viewDetails,
    searchItem
});

export default allReducers