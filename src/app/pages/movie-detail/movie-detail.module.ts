import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule, MatIconModule, MatButtonModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail.component';
import { MovieDetailRoutingModule } from './movie-detail-routing.module';

@NgModule({
    imports: [
        MovieDetailRoutingModule,
        CommonModule,
        MatProgressSpinnerModule, MatIconModule, MatButtonModule
    ],
    exports: [],
    declarations: [MovieDetailComponent],
    providers: [],
})
export class MovieDetailModule { }
