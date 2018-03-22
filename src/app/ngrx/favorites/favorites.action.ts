import { Injectable } from '@angular/core';

const ACTION_PREFIX = '[Favorites]';
export const FAVORITES_ACTION_TYPE = {
    add: `${ACTION_PREFIX} Added`,
    remove: `${ACTION_PREFIX} Removed`
};

@Injectable()
export class FavoritesAction {

    add(payload: number) {
        return {
            type: FAVORITES_ACTION_TYPE.add,
            payload
        }
    }

    remove(payload: number) {
        return {
            type: FAVORITES_ACTION_TYPE.remove,
            payload
        }
    }

}
