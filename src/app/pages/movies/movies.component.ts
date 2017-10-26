import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WatchListService } from '../../services/watchlist.service';
import { MovieDetail } from '../../models';
import { Observable } from 'rxjs/Rx';

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
    public watchListIds: Observable<number[]>;

    constructor(private movieStoreService: WatchListService, route: ActivatedRoute) {
        this.filterType = route.snapshot.data.filterType;
    }

    private setMoviesList() {
        switch (this.filterType) {
            case MovieFilterType.Favorites:
                this.watchListIds = this.movieStoreService.getFavorites();
                break;
            case MovieFilterType.Watchlist:
                this.watchListIds = this.movieStoreService.getWatchlist();
                break;
            case MovieFilterType.All:
            default:
                this.watchListIds = this.movieStoreService.getAll();
                break;
        }
    }

    ngOnInit() {
        this.setMoviesList();
    }
}
