import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from './../../services/'
import { CardModel } from './../../models';

@Component({
    selector: 'st-moviecard',
    templateUrl: './movie-card.component.html',
    styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
    @Input() Model: CardModel;

    private isLoading: boolean;

    constructor() { this.isLoading = true; }

    ngOnInit() {
        this.isLoading = false;
    }
}
