import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail.component';

@NgModule({
    imports: [ MaterialModule, CommonModule ],
    exports: [],
    declarations: [MovieDetailComponent],
    providers: [],
})
export class MovieDetailModule { }
