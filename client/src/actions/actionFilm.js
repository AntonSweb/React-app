import api from '../api/api';

export const asyncGetFilms = () => {
    return dispatch => {
        api.getListFilms()
            .then(response => {
                    // if (!response.ok) {
                    //     // console.log('error');
                    //     throw Error(response.statusText);
                    // }
                    // dispatch({
                    //     type: 'LOAD_FILMS_SUCCESS',
                    //     payload: response.data
                    // });
                return response.data
                }
            )
            .then(items => dispatch(itemsFilmSuccess(items)))
            .catch(error => itemsFilmError(error));
    }
};

export function itemsFilmSuccess(items) {
    return {
        type: 'LOAD_FILMS_SUCCESS',
        payload: items
    };
}
export function itemsFilmError(error) {
    return {
        type: 'ERROR',
        payload: error
    };
}

export const viewDetails  = (film) => {
    return {
        type: 'VIEW_DETAILS',
        payload: film
    }
};