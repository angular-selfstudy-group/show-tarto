import { Injectable } from '@angular/core';

@Injectable()
export class FavoritesSelector {

    getAll() {
        return (state) => state.favorites;
    }

}
