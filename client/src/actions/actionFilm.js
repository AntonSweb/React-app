import api from '../api/api';

// export default function loadFilmAction(list) {
//     return {
//         type: 'LOAD_FILM',
//         payload: list
//     }
// }

export const asyncGetFilms = () => {
    return dispatch => {
        api.getListFilms()
            .then(response =>
                dispatch({
                    type: 'ADD_FILM',
                    payload: response.data
                })
            )
            .catch(error =>
                dispatch({
                    type: 'ERROR',
                    payload: error
                })
            );
    }
};