import api from '../api/api';
// import axios from "axios/index";

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

export const addNewFilm = (data) => {
    return dispatch => {
        api.addNewFilms(data)
            .then(response => {
                return response.data
            })
            .then(body => dispatch(addFilmSuccess(body)))
            // .then(() => this.asyncGetFilms())
            .catch(error => itemsFilmError(error));
    }
};

export const deleteFilm = (id) => {
    return dispatch => {
        api.deleteFilms(id)
            .then(response => {
                return response.data
            })
            .then(id => dispatch(removeFilmSuccess(id)))
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