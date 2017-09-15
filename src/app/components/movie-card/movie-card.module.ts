import { NgModule } from '@angular/core';
import { MovieCardComponent } from './movie-card.component'
import { ServicesModule } from '../../services';
import { SharedModule } from './../../shared.module';
import { MaterialComponentsModule } from 'app/material.components.module';

@NgModule({
    imports: [SharedModule, MaterialComponentsModule, ServicesModule],
    exports: [MovieCardComponent],
    declarations: [MovieCardComponent],
    providers: []
})
export class MovieCardModule { }
