import { NgModule } from '@angular/core';
import { MaterialComponentsModule } from 'app/material.components.module';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail.component';
import { MovieDetailRoutingModule } from './movie-detail-routing.module';

@NgModule({
    imports: [
        MovieDetailRoutingModule,
        MaterialComponentsModule,
        CommonModule
    ],
    exports: [],
    declarations: [MovieDetailComponent],
    providers: [],
})
export class MovieDetailModule { }
