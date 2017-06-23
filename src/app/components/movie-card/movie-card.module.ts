import { NgModule } from '@angular/core';
import { MovieCardComponent } from './movie-card.component'
import { ServicesModule } from '../../services';
import { SharedModule } from './../../shared.module';


@NgModule({
    imports: [SharedModule, ServicesModule],
    exports: [MovieCardComponent],
    declarations: [MovieCardComponent],
    providers: []
})
export class MovieCardModule { }
