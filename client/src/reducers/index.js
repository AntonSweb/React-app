import {combineReducers} from 'redux';
import {itemsSuccess, itemsError, viewDetails} from './films.js';
import {searchItem} from './search.js';
import {filterItems} from './sort.js';

const allReducers = combineReducers({
    itemsSuccess,
    itemsError,
    viewDetails,
    searchItem,
    filterItems
});

export default allReducers