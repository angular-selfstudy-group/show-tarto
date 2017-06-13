import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { SearchService } from '../services/search.service';
import 'rxjs/Rx';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
}
