import { combineReducers } from "redux";
import { artworkReducer, selectedArtworkReducer } from "./artworkReducer";

const reducers = combineReducers({
allArtworks: artworkReducer,
artwork: selectedArtworkReducer,


});

export default reducers;