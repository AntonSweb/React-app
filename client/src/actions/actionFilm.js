import api from '../api/configApi';

export const asyncGetFilms = () => {
    return dispatch => {
        api.getListFilms()
            .then(response => {
                return response.data
            })
            .then(items => dispatch(itemsFilmSuccess(items)))
            .catch(error => itemsFilmError(error));
    }
};

export const addNewFilm = (data) => {
    return dispatch => {
        api.addFilm(data)
            .then(response => {
                return response.data
            })
            .then(body => dispatch(addFilmSuccess(body)))
            .catch(error => itemsFilmError(error));
    }
};

export const loadFilms = (data) => {
    return dispatch => {
        api.loadNewFilms(data)
            .then(response => {
                return response.data
            })
            .then(body => dispatch(addFilmSuccess(body)))
            .catch(error => itemsFilmError(error));
    }
};

export const deleteFilm = (id) => {
    return dispatch => {
        api.removeFilm(id)
            .then(response => {
                return response.data
            })
            .then(id => dispatch(removeFilmSuccess(id)))
            .catch(error => itemsFilmError(error));
    }
};

export const deleteAllFilms = () => {
    return dispatch => {
        api.removeAllFilms()
            .then(response => {
                return response.data
               // return asyncGetFilms();
            })
            .then(removed => dispatch(removeAllFilmsSuccess(removed)))
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

export function viewDetails(film) {
    return {
        type: 'VIEW_DETAILS',
        payload: film
    }
}

export function addFilmSuccess(newFilm) {
    return {
        type: 'ADD_FILM_SUCCESS',
        payload: newFilm
    }
}

export function removeFilmSuccess(id) {
    return {
        type: 'FILM_REMOVED',
        payload: id
    }
}

export function removeAllFilmsSuccess(removed) {
    return {
        type: 'ALL_FILMS_REMOVED',
        payload: removed
    }
}