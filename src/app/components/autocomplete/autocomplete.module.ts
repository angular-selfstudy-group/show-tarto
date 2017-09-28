import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared.module'

import { AutoCompleteComponent } from './autocomplete.component';
import { MdIconModule, MdButtonModule, MdAutocompleteModule, MdInputModule } from '@angular/material';

@NgModule({
    imports: [
        SharedModule,
        MdIconModule, MdAutocompleteModule, MdInputModule, MdButtonModule
    ],
    exports: [AutoCompleteComponent],
    declarations: [AutoCompleteComponent],
    providers: [],
})
export class AutoCompleteModule { }
