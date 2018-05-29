export function itemsError (state = false, action) {
    switch (action.type){
        case "ERROR":
            return action.payload;
        default:
            return state
    }

}

export function itemsSuccess (state = [], action) {
    switch (action.type){
        case "LOAD_FILMS_SUCCESS":
            // return [...state, action.payload];
            return action.payload;
        default:
            return state
    }
}

export function viewDetails (state = null, action) {
    switch (action.type){
        case "VIEW_DETAILS":
            return action.payload;
        default:
            return state
    }
}