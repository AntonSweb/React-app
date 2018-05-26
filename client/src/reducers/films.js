const initialState = [
    {
        id: 1,
        title: 'Shutter Island',
        release: 2010,
        form: "DVD",
        stars: "Dicaprio"
    },
    {
        id: 2,
        title: 'Léon: The Professional',
        release: 1994,
        form: "HD",
        stars: "Leon"
    },
];
// const initialState = [];

export default function filmsInfo (state=initialState, action) {
    switch (action.type){
        // case "LOAD_FILM":
        //     return [...state, action.payload];
        case "ADD_FILM":
            return action.payload;
        default:
            return state
    }
}