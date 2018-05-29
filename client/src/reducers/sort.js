export function filterItems (state = [], action) {
    switch (action.type){
        case "SORT_FILMS":
            return action.payload;
        default:
            return state
    }
}