import { NgModule } from '@angular/core';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';

@NgModule({
    imports: [MoviesRoutingModule],
    exports: [],
    declarations: [MoviesComponent],
    providers: [],
})
export class MoviesModule { }
