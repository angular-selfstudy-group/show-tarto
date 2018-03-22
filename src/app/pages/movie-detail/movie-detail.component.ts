import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { MovieDetail } from 'app/models';
import { SearchService, WatchListService } from './../../services';
import { FavoritesAction } from '../../ngrx/favorites/favorites.action';
import { AppState } from '../../app.module';

@Component({
    selector: 'st-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

    public Model: MovieDetail;
    public id: number;
    public isLoading: boolean;
    public isFavorite: boolean;
    public isWatchlist: boolean;

    constructor(
        private route: ActivatedRoute,
        private searchService: SearchService,
        private watchlistService: WatchListService,
        private store: Store<AppState>,
        private favoritesAction: FavoritesAction
    ) { }

    ngOnInit() {
        this.isLoading = true;
        this.id = +this.route.snapshot.params.id;
        this.searchService.GetMovieDetails(this.id).subscribe(result => {
            this.Model = result;
            this.isLoading = false;
        });
        this.isFavorite = this.watchlistService.isFavorite(this.id);
        this.isWatchlist = this.watchlistService.isWatchlist(this.id);
    }

    toggleFavorite() {
        if (this.isFavorite) {
            this.store.dispatch(this.favoritesAction.remove(this.id));
        } else {
            this.store.dispatch(this.favoritesAction.add(this.id));
        }

        this.isFavorite = !this.isFavorite;
    }

    toggleWatchlist() {
        if (this.isWatchlist) {
            this.watchlistService.remove(this.Model.id);
        } else {
            this.watchlistService.addToWatchlist(this.id);
        }

        this.isWatchlist = !this.isWatchlist;
    }
}
