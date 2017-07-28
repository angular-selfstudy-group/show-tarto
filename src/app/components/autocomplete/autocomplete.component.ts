import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { SearchService, Show, MovieStoreServiceBase, WatchListService } from '../../services';

import 'rxjs/Rx';

@Component({
	selector: 'st-autocomplete',
	templateUrl: './autocomplete.component.html',
	styleUrls: ['./autocomplete.component.scss']
})
export class AutoCompleteComponent implements OnInit {
	searchInput: FormControl;
	showSearchResults: Observable<any>;

	constructor(private router: Router, private searchService: SearchService, private watchlistService: WatchListService) {
		this.searchInput = new FormControl();
		this.showSearchResults = this.searchInput.valueChanges
			.debounceTime(500)
			.startWith(null)
			.flatMap(term => {
				return this.searchService.Search(term)
					.map(result => result);
			})
			.map(results => results);
	}

	ngOnInit() {
	}

	goToDetails(show: Show) {
		this.router.navigate(['movies/', show.id]);
	}
	
	displayResultInSearchbox(show: Show) {
		return show && show.title;
	}

	addToWatchList(show: Show) {
		this.watchlistService.addToWatchlist(show);
	}

	addToFavorites(show: Show) {
		this.watchlistService.addToFavorites(show);
	}
}
