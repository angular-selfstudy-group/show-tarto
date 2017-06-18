import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { ServicesModule } from '../../services/';

@NgModule({
    imports: [MoviesRoutingModule, ServicesModule, CommonModule],
    exports: [],
    declarations: [MoviesComponent],
    providers: [],
})
export class MoviesModule { }
