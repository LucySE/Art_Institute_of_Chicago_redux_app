import { ActionTypes } from "../constants/action-types";

const initialState = {
artworks: []
};

export const artworkReducer = {state = initialState, { type, payload }} => {
    switch(type) {
        case ActionTypes.GET_ARTWORKS:
            return { ...State, artworks: payload};
            default:
                return State;
    }
};

export const selectedArtworkReducer = (state ={}, { type, payload}) => {
    console.log(type);
    switch (type) {
        case ActionTypes.SELECTED_ARTWORK:
        return {...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_ARTWORK:
            return {};
            default:
                return state;
    }
}
