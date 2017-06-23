import { NgModule } from '@angular/core';

import { HomeModule } from './home/home.module';
import { MoviesModule } from './movies/movies.module';
import { SeriesModule } from './series/series.module';
import { MovieDetailModule } from './movie-detail/movie-detail.module';

@NgModule({
    imports: [HomeModule, MoviesModule, SeriesModule, MovieDetailModule],
    exports: [HomeModule, MoviesModule, SeriesModule, MovieDetailModule],
    declarations: [],
    providers: [],
})
export class PagesModule { }
