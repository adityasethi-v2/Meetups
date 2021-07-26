import { ActionTypes } from "../constants/action-types";

const startState = {
    favorites: []
}

export const FavoritesReducer = (state = startState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_FAVORITE:
            return { ...state, favorites: state.favorites.concat(payload) };
        case ActionTypes.REMOVE_FAVORITE:
            return { ...state, favorites: state.favorites.filter((meetup) => meetup.id !== payload) };
        default:
            return state;
    }
}