import { Component, OnInit } from '@angular/core';
import { AutoCompleteComponent } from './../../components/autocomplete/autocomplete.component';
import { CardModel } from './../../models';
import { SearchService } from './../../services';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    private popularMovies: CardModel[];

    private Model: CardModel;
    public isLoading: boolean;

    constructor(private _searchService: SearchService) { }
    ngOnInit() {
        this.isLoading = true;
        this._searchService.GetPopularMovies().subscribe(results => {
            const maxIndex = results.length - 1;
            const itemsToShow = 5;
            const randomIndex = Math.floor(Math.random() * (maxIndex - itemsToShow)) + itemsToShow;
            this.popularMovies = results.slice(randomIndex - itemsToShow, randomIndex);
            this.isLoading = false;
        });
    }
}
