import { NgModule } from '@angular/core';

import { AutoCompleteComponent } from './autocomplete.component';
import { MdIconModule, MdButtonModule, MdAutocompleteModule, MdInputModule } from '@angular/material';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule, ReactiveFormsModule,
        MdIconModule, MdAutocompleteModule, MdInputModule, MdButtonModule
    ],
    exports: [AutoCompleteComponent],
    declarations: [AutoCompleteComponent],
    providers: [],
})
export class AutoCompleteModule { }
