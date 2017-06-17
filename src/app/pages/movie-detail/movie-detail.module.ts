import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { MovieDetailRoutingModule } from './movie-detail-routing.module';
import { MovieDetailComponent } from './movie-detail.component';

@NgModule({
    imports: [MovieDetailRoutingModule, MaterialModule, CommonModule ],
    exports: [],
    declarations: [MovieDetailComponent],
    providers: [],
})
export class MovieDetailModule { }
