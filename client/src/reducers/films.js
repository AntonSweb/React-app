const initialState = [
    {
        id: 1,
        title: 'Shutter Island',
        release: 2010
    },
    {
        id: 2,
        title: 'Léon: The Professional',
        release: 1994
    },
];
// const initialState = {
//         id: 1,
//         title: 'Shutter Island',
//         release: 2010
// };
export default function filmsInfo (state = initialState, action) {
    switch (action.type){
        case "SET_FILM":
            return {...state, title: action.payload};
        default:
            return state
    }
}