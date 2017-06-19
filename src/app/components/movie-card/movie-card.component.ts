import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from './../../services/'
import { CardModel } from './../../models';
import { Router } from "@angular/router";

@Component({
    selector: 'st-moviecard',
    templateUrl: './movie-card.component.html',
    styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
    @Input() Model: CardModel;

    private isLoading: boolean;
    private tooltipPosition: string;

    constructor(private router: Router) {
        this.isLoading = true;
        this.tooltipPosition = 'below';
    }

    ngOnInit() {
        this.isLoading = false;
    }

    private cardClick() {
        this.router.navigate(['movie/', this.Model.id]);
    }

    private favorite(event: Event, id: string) {
        event.stopPropagation();
        console.log(`Movie [${id}] added to favorite`);
    }

    private watchlist(event: Event, id: string) {
        event.stopPropagation();
        console.log(`Movie [${id}] added to watchlist`);
    }
}
