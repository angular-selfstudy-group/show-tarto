import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from './../../services/'
import { MovieDetailModel } from './../../models';
import { Router } from '@angular/router';
import { WatchListService, MediaModel } from '../../services/watchlist.service';

@Component({
    selector: 'st-moviecard',
    templateUrl: './movie-card.component.html',
    styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
    @Input() Id: number;
    public Model: MovieDetailModel;
    public isLoading: boolean;
    public tooltipPosition: string;
    public tooltipText: string;
    public addedToWatchList: boolean;
    public addedToFavorites: boolean;

    constructor(private router: Router, private _watchlistService: WatchListService, private _searchService: SearchService) {
        this.isLoading = true;
        this.tooltipPosition = 'below';
    }

    ngOnInit() {
        this.isLoading = true;
        if (this.Id) {
            this._searchService.GetMovieDetails(this.Id).subscribe(m => {
                this.Model = m;
                this.Model.title = this.Model.title.length > 50 ? this.Model.title.substr(0, 50) + '...' : this.Model.title;
                this.Model.overview = this.Model.overview.length > 65 ? this.Model.overview.substr(0, 65) + '...' : this.Model.overview;
                this.isLoading = false;
                this.tooltipText = this.addedToWatchList ? 'Remove from watchlist' : 'Add to watchlist';
            });

            this.addedToFavorites = this._watchlistService.isFavorite(this.Id);
            this.addedToWatchList = this._watchlistService.isWatchlist(this.Id);
        }
    }

    public cardClick() {
        this.router.navigate(['movies/', this.Model.id]);
    }

    private toggleWatchlist(event: Event) {
        if (this.addedToWatchList) {
            this._watchlistService.remove(this.Model);
        } else {
            this._watchlistService.addToWatchlist(this.Model);
        }
        this.addedToWatchList = !this.addedToWatchList;
        event.stopPropagation();
    }

    private toggleFavorites() {
        if (this.addedToFavorites) {
            this._watchlistService.remove(this.Model);
        } else {
            this._watchlistService.addToFavorites(this.Model);
        }
        this.addedToFavorites = !this.addedToFavorites;
        event.stopPropagation();
    }
}
