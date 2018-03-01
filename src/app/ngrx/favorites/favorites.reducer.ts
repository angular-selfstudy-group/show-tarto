import { FAVORITES_ACTION_TYPE, FavoritesAction } from './favorites.action';
import { FavoritesState } from './favorites.model';

const initialState: FavoritesState = {
    ids: []
}

export function favoritesReducer(state = initialState, action) {
    switch (action.type) {
        case FAVORITES_ACTION_TYPE.add:
            const newIds = [...state.ids, action.payload];
            return {
                ...state,
                ids: newIds
            };

        case FAVORITES_ACTION_TYPE.remove:
            const ids = state.ids.filter(id => id !== action.payload);
            return {
                ...state,
                ids
            }

        default:
            return state;
    }
}
