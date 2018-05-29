export const searchFilm = (name) => {
    return dispatch => {
        dispatch(searchItem(name));
    }
};

export function searchItem(item) {
    return {
        type: 'SEARCH_FILM',
        payload: item
    };
}