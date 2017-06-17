import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { HomeModule } from './home/home.module';
import { MoviesModule } from './movies/movies.module';
import { SeriesModule } from './series/series.module';
import { MovieDetailModule } from './movie-detail/movie-detail.module';

@NgModule({
    imports: [MaterialModule, HomeModule, MoviesModule, SeriesModule, MovieDetailModule],
    exports: [HomeModule, MoviesModule, SeriesModule, MovieDetailModule],
    declarations: [],
    providers: [],
})
export class PagesModule { }
