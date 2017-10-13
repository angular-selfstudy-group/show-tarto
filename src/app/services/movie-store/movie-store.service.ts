import { Injectable } from '@angular/core';
import { MovieStoreService as MovieStoreServiceBase, Movie } from '../movie-store.service';

@Injectable()
export class MovieStoreService extends MovieStoreServiceBase {
    watchList: Movie[];

    constructor() {
        super();

        this.watchList = [];
    }

    getWatchlist (): Movie[] {
        return this.watchList.slice();
    }

    addToWatchList(movie: Movie) {
        this.watchList.push(movie);
    }
}
