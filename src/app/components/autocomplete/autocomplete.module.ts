import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AutoCompleteComponent } from './autocomplete.component';

@NgModule({
    imports: [MaterialModule, FormsModule, ReactiveFormsModule, CommonModule],
    exports: [AutoCompleteComponent],
    declarations: [AutoCompleteComponent],
    providers: [],
})
export class AutoCompleteModule { }
