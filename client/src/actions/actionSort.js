export const sortFilms = (sortItems) => {
    return dispatch => {
        dispatch(filterItems(sortItems));
    }
};

export function filterItems(sortArr) {
    return {
        type: 'SORT_FILMS',
        payload: sortArr
    };
}