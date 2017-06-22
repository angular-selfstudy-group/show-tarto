import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { MovieCardComponent } from './movie-card.component'
import { FormsModule } from '@angular/forms';
import { ServicesModule } from '../../services';


@NgModule({
    imports: [CommonModule, MaterialModule, ServicesModule],
    exports: [MovieCardComponent],
    declarations: [MovieCardComponent],
    providers: []
})
export class MovieCardModule { }
