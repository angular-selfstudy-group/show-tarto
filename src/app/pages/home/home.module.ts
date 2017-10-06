import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ComponentsModule } from './../../components/components.module';
import { AutoCompleteComponent } from './../../components/autocomplete/autocomplete.component';
import { MdProgressSpinnerModule  } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        MdProgressSpinnerModule
    ],
    declarations: [HomeComponent],
    providers: [],
})
export class HomeModule { }
