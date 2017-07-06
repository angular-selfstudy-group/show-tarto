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
    private tooltipPosition: string;
    private tooltipText: string;
    private addedToWatchList: boolean;
    private addedToFavorites: boolean;

    constructor(private router: Router, private _watchlistService: WatchListService, private _searchService: SearchService) {
        this.isLoading = true;
        this.tooltipPosition = 'below';
    }

    ngOnInit() {
        this.isLoading = true;
        if (this.Id) {
            this._searchService.GetMovieDetails(this.Id).subscribe(m => {
                this.Model = m;
                this.Model.overview = this.Model.overview.length > 65 ? this.Model.overview.substr(0, 65) + "..." : this.Model.overview;
                this.isLoading = false;
                this.addedToWatchList = this._watchlistService.contains(this.Model);
                this.tooltipText = this.addedToWatchList ? 'Remove from watchlist' : 'Add to watchlist';
            })
        }
    }

    public cardClick() {
        this.router.navigate(['movies/', this.Model.id]);
    }

    private favorite(event: Event) {
        event.stopPropagation();
        console.log(`Movie [${this.Model.id}] added to favorite`);
    }

    private watchlist(event: Event) {
        if (this.addedToWatchList) {
            this._watchlistService.remove(this.Model);
        } else {
            this._watchlistService.add(this.Model);
        }
        this.addedToWatchList = !this.addedToWatchList;
        event.stopPropagation();
        console.log(`Movie [${this.Model.id}] added to watchlist`);
    }
}
