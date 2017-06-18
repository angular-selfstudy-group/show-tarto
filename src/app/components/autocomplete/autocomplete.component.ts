import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { SearchService, Show } from '../../services/search.service';

import 'rxjs/Rx';

@Component({
	selector: 'st-autocomplete',
	templateUrl: './autocomplete.component.html',
	styleUrls: ['./autocomplete.component.scss']
})
export class AutoCompleteComponent implements OnInit {
	searchInput: FormControl;
	showSearchResults: Observable<any>;

	constructor(private searchService: SearchService) {
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

	displayResultInSearchbox(show: Show) {
		return show && show.title;
	}
}
