import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card.component'
import { ServicesModule } from '../../services';
import { MatIconModule, MatButtonModule, MatCardModule, MatTooltipModule  } from '@angular/material';

@NgModule({
    imports: [
        CommonModule, ServicesModule,
        MatIconModule, MatButtonModule, MatCardModule, MatTooltipModule,
    ],
    exports: [MovieCardComponent],
    declarations: [MovieCardComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MovieCardModule { }
