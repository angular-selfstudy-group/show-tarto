import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared.module';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { ServicesModule } from '../../services/';
import { MovieCardModule } from '../../components/movie-card/movie-card.module';
import { MdIconModule, MdButtonToggleModule } from '@angular/material';

@NgModule({
    imports: [
        MoviesRoutingModule, ServicesModule, SharedModule, MovieCardModule,
        MdIconModule, MdButtonToggleModule
    ],
    exports: [],
    declarations: [MoviesComponent]
})
export class MoviesModule { }
