import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { MovieCardComponent } from './movie-card.component'
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [CommonModule, MaterialModule],
    exports: [MovieCardComponent],
    declarations: [MovieCardComponent],
    providers: []
})
export class MovieCardModule { }
