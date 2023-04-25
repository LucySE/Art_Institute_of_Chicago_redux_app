//Defining the actions. This will allow the artworks to be selected.
import { ActionTypes } from "../constants/action-types";



export const getArtworks = (artworks) => {
    return{
        type: ActionTypes.GET_ARTWORKS,
        payload: artworks,
    };
};

export const selectedArtwork = (artwork) => {
    return{
        type: ActionTypes.SELECTED_ARTWORK,
        payload: artwork,
    };
};

// export const removeSelectedArtwork = () => {
//     return{
//         type: ActionTypes.REMOVE_SELECTED_ARTWORK,
//     };
// };
