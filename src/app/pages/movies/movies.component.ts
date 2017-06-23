import { Component, OnInit } from '@angular/core';
import { MediaModel, WatchListService } from '../../services/watchlist.service';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'st-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
    public watchList: Observable<MediaModel[]>;

    constructor(private movieStoreService: WatchListService) {
    }

    ngOnInit() {
        this.watchList = this.movieStoreService.getAll();
    }
}
