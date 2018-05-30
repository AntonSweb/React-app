export const searchFilm = (props) => {
    return dispatch => {
        dispatch(searchItem(props));
    }
};
export function searchItem(props) {
    return {
        type: 'SEARCH_FILM',
        payload: props
    };
}