import { Component, OnInit } from '@angular/core';
import { AutoCompleteComponent } from './../../components/autocomplete/autocomplete.component';
import { SearchService } from './../../services';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
    selector: 'st-app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public popularMovieIds: number[];
    public isLoading: boolean;

    constructor(private _searchService: SearchService) { }
    ngOnInit() {
        this.isLoading = true;
        this._searchService.GetPopularMovieIds().subscribe(results => {
            const maxIndex = results.length - 1;
            const itemsToShow = 10;
            const randomIndex = Math.floor(Math.random() * (maxIndex - itemsToShow)) + itemsToShow;
            this.popularMovieIds = results.slice(randomIndex - itemsToShow, randomIndex);
            this.isLoading = false;
        });
    }
}
