import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { HomeModule } from './home/home.module';
import { MoviesModule } from './movies/movies.module';
import { SeriesModule } from './series/series.module';

@NgModule({
    imports: [MaterialModule, HomeModule, MoviesModule, SeriesModule],
    exports: [HomeModule, MoviesModule, SeriesModule],
    declarations: [],
    providers: [],
})
export class PagesModule { }
