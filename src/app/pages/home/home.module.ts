import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ComponentsModule } from './../../components/components.module';
import { AutoCompleteComponent } from './../../components/autocomplete/autocomplete.component';
import { SharedModule } from './../../shared.module';
import { MdProgressSpinnerModule  } from '@angular/material';

@NgModule({
    imports: [
        ComponentsModule, SharedModule,
        MdProgressSpinnerModule
    ],
    declarations: [HomeComponent],
    providers: [],
})
export class HomeModule { }
