import { combineReducers } from "redux";
import { FavoritesReducer } from "./FavoritesReducers";

const reducers = combineReducers({
    favorites: FavoritesReducer
})

export default reducers;