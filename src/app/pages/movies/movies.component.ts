import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WatchListService } from '../../services/watchlist.service';
import { MovieDetail } from '../../models';
import { Observable, pipe } from 'rxjs/Rx';
import { AppState } from './../../app.module';
import { FavoritesSelector } from '../../ngrx/favorites/favorites.selector';
import { filter, tap } from 'rxjs/operators';

export enum MovieFilterType {
    All,
    Favorites,
    Watchlist
}

@Component({
    selector: 'st-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
    public filterType: MovieFilterType;
    public watchListIds: number[] = [];

    constructor(
        private movieStoreService: WatchListService,
        route: ActivatedRoute,
        private store: Store<AppState>,
        private selector: FavoritesSelector,
    ) {
        this.filterType = route.snapshot.data.filterType;
    }

    // private setMoviesList() {
    //     switch (this.filterType) {
    //         case MovieFilterType.Favorites:
    //             this.watchListIds = this.store.pipe(select('ids'));
    //             break;
    //         case MovieFilterType.Watchlist:
    //             this.watchListIds = this.movieStoreService.getWatchlist();
    //             break;
    //         case MovieFilterType.All:
    //         default:
    //             this.watchListIds = this.movieStoreService.getAll();
    //             break;
    //     }
    // }

    ngOnInit() {
        const whatchlistIds$ = this.store.select(this.selector.getAll())
            .pipe(
                filter(x => !!x),
                tap((x) => {
                    this.watchListIds = x;
                })
            );
        // this.setMoviesList();
    }
}
