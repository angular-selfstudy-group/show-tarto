import { NgModule } from '@angular/core';
import { AutoCompleteModule } from './autocomplete/autocomplete.module';
import { MovieCardModule } from './movie-card/movie-card.module'

@NgModule({
    imports: [AutoCompleteModule, MovieCardModule],
    exports: [AutoCompleteModule, MovieCardModule],
    declarations: [],
    providers: [],
})
export class ComponentsModule { }
