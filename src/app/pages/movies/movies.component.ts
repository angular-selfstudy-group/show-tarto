import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Media, WatchListService } from '../../services/watchlist.service';
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
    public watchList: Observable<Media[]>;

    constructor(private movieStoreService: WatchListService, route: ActivatedRoute) {
        this.filterType = route.snapshot.data.filterType;
    }

    private setMoviesList() {
        switch (this.filterType) {
            case MovieFilterType.Favorites:
                this.watchList = this.movieStoreService.getFavorites();
                break;
            case MovieFilterType.Watchlist:
                this.watchList = this.movieStoreService.getWatchlist();
                break;
            case MovieFilterType.All:
            default:
                this.watchList = this.movieStoreService.getAll();
                break;
        }
    }

    ngOnInit() {
        this.setMoviesList();
    }
}
