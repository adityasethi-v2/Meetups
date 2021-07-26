import { ActionTypes } from "../constants/action-types";

export const addFavorite = (favorite) => {
    return {
        type: ActionTypes.ADD_FAVORITE,
        payload: favorite
    }
}

export const removeFavorite = (favoriteId) => {
    return {
        type: ActionTypes.REMOVE_FAVORITE,
        payload: favoriteId
    }
}