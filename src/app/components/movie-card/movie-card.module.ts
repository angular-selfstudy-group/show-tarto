import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card.component'
import { ServicesModule } from '../../services';
import { MaterialComponentsModule } from 'app/material.components.module';
import { MdIconModule, MdButtonModule, MdCardModule, MdTooltipModule  } from '@angular/material';

@NgModule({
    imports: [
        CommonModule, ServicesModule,
        MdIconModule, MdButtonModule, MdCardModule, MdTooltipModule,
    ],
    exports: [MovieCardComponent],
    declarations: [MovieCardComponent],
    providers: []
})
export class MovieCardModule { }
