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
    api.addFilm(data)
        .then(() => asyncGetFilms())
        .catch(error => console.log(error))
};

export const loadFilms = (data) => {
    api.loadNewFilms(data)
        .then(() => asyncGetFilms())
        .catch(error => console.log(error))
};

export const deleteFilm = (id) => {
    api.removeFilm(id)
        .then(() => asyncGetFilms())
        .catch(error => console.log(error))
};

export const deleteAllFilms = () => {
    api.removeAllFilms()
        .then(() => asyncGetFilms())
        .catch(error => console.log(error))
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