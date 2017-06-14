import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ComponentsModule } from './../../components/components.module';
import { AutoCompleteComponent } from './../../components/autocomplete/autocomplete.component';

@NgModule({
    imports: [ComponentsModule],
    exports: [],
    declarations: [HomeComponent],
    providers: [],
})
export class HomeModule { }
