import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediaModel, WatchListService } from '../../services/watchlist.service';
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
    public filter;
    public watchList: Observable<MediaModel[]>;
    
    constructor(private movieStoreService: WatchListService, route: ActivatedRoute) {
    	this.filterType = route.snapshot.data.filterType;
    }

    ngOnInit() {
        this.watchList = this.movieStoreService.getAll();
        this.filter = this.filterType;
    }
}
