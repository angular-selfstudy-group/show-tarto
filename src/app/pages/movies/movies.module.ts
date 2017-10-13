import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { ServicesModule } from '../../services/';
import { MovieCardModule } from '../../components/movie-card/movie-card.module';
import { MdIconModule, MdButtonToggleModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule, FormsModule,
        MoviesRoutingModule, ServicesModule, MovieCardModule,
        MdIconModule, MdButtonToggleModule
    ],
    exports: [],
    declarations: [MoviesComponent]
})
export class MoviesModule { }
