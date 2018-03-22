import { FAVORITES_ACTION_TYPE, FavoritesAction } from './favorites.action';
import { FavoritesState } from './favorites.model';

const initialState: FavoritesState = {
    favorites: []
}

export function favoritesReducer(state = initialState, action) {
    switch (action.type) {
        case FAVORITES_ACTION_TYPE.add:
            const newIds = [...state.favorites, action.payload];
            return {
                ...state,
                favorites: newIds
            };

        case FAVORITES_ACTION_TYPE.remove:
            const ids = state.favorites.filter(id => id !== action.payload);
            return {
                ...state,
                favorites: ids
            }

        default:
            return state;
    }
}
