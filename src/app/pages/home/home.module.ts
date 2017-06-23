import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ComponentsModule } from './../../components/components.module';
import { AutoCompleteComponent } from './../../components/autocomplete/autocomplete.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MdProgressSpinnerModule } from '@angular/material';


@NgModule({
    imports: [ComponentsModule, FormsModule, CommonModule, MdProgressSpinnerModule],
    exports: [],
    declarations: [HomeComponent],
    providers: [],
})
export class HomeModule { }
