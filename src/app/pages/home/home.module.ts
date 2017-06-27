import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ComponentsModule } from './../../components/components.module';
import { AutoCompleteComponent } from './../../components/autocomplete/autocomplete.component';
import { SharedModule } from './../../shared.module';
import { MaterialComponentsModule } from "app/material.components.module";

@NgModule({
    imports: [ComponentsModule, SharedModule, MaterialComponentsModule],
    declarations: [HomeComponent],
    providers: [],
})
export class HomeModule { }
