import { Component, OnInit } from '@angular/core';
import { MovieStoreServiceBase, Movie } from '../../services/';

@Component({
	selector: 'st-movies',
	templateUrl: './movies.component.html',
	styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
	watchList: Movie[];

	constructor(private movieStoreService: MovieStoreServiceBase) {
		this.watchList = [];
	}

	ngOnInit() {
		this.watchList = this.movieStoreService.getWatchlist();
	}
}
