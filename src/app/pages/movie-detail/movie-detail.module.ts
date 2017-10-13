import { NgModule } from '@angular/core';
import { MdProgressSpinnerModule, MdIconModule, MdButtonModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail.component';
import { MovieDetailRoutingModule } from './movie-detail-routing.module';

@NgModule({
    imports: [
        MovieDetailRoutingModule,
        CommonModule,
        MdProgressSpinnerModule, MdIconModule, MdButtonModule
    ],
    exports: [],
    declarations: [MovieDetailComponent],
    providers: [],
})
export class MovieDetailModule { }
