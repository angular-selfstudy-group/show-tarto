import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MdSidenavModule, MdToolbarModule, MdIconModule, MdButtonModule,
    MdCardModule, MdTooltipModule, MdProgressSpinnerModule, MdAutocompleteModule, MdInputModule
} from '@angular/material';
import 'hammerjs';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    exports: [
        CommonModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, MdSidenavModule,
        MdToolbarModule, MdIconModule, MdButtonModule, MdCardModule, MdTooltipModule, MdProgressSpinnerModule,
        MdAutocompleteModule, MdInputModule
    ],
    providers: [],
    bootstrap: []
})
export class SharedModule { }
