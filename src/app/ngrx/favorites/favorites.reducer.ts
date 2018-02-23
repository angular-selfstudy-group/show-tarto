import { FAVORITES_ACTION_TYPE, FavoritesAction } from './favorites.action';
import { FavoritesState } from './favorites.model';

const initialState: FavoritesState = {
    ids: []
}

export function favoritesReducer(state = initialState, action) {
    switch (action.type) {
        case FAVORITES_ACTION_TYPE.add:
            const newIds = state.ids.concat(action.payload);
            return Object.assign({}, state, { ids: newIds });

        case FAVORITES_ACTION_TYPE.remove:

            break;

        default:
            return state;
    }
}
