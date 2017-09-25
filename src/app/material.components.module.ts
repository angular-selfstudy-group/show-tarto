import { NgModule } from '@angular/core';

import {
    MdCardModule,
    MdIconModule,
    MdInputModule,
    MdButtonModule,
    MdSidenavModule,
    MdToolbarModule,
    MdTooltipModule,
    MdAutocompleteModule,
    MdButtonToggleModule,
    MdProgressSpinnerModule
} from '@angular/material';


@NgModule({
    imports: [
        MdCardModule,
        MdIconModule,
        MdInputModule,
        MdButtonModule,
        MdSidenavModule,
        MdToolbarModule,
        MdTooltipModule,
        MdAutocompleteModule,
        MdButtonToggleModule,
        MdProgressSpinnerModule
    ],
    exports: [
        MdCardModule,
        MdIconModule,
        MdInputModule,
        MdButtonModule,
        MdSidenavModule,
        MdToolbarModule,
        MdTooltipModule,
        MdAutocompleteModule,
        MdButtonToggleModule,
        MdProgressSpinnerModule
    ]
})
export class MaterialComponentsModule { }
