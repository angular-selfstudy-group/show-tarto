import { NgModule } from '@angular/core';

import { AutoCompleteComponent } from './autocomplete.component';
import { MatIconModule, MatButtonModule, MatAutocompleteModule, MatInputModule } from '@angular/material';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule, ReactiveFormsModule,
        MatIconModule, MatAutocompleteModule, MatInputModule, MatButtonModule
    ],
    exports: [AutoCompleteComponent],
    declarations: [AutoCompleteComponent],
    providers: [],
})
export class AutoCompleteModule { }
