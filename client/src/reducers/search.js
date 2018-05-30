export function searchItem (state = ['', 'title'], action) {
    switch (action.type){
        case "SEARCH_FILM":
            return action.payload;
        default:
            return state
    }
}