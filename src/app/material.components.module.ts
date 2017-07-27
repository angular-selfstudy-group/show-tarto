import {
    MdSidenavModule, MdToolbarModule, MdIconModule, MdButtonModule, MdButtonToggleModule,
    MdCardModule, MdTooltipModule, MdProgressSpinnerModule, MdAutocompleteModule, MdInputModule,
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MdSidenavModule, MdToolbarModule, MdIconModule, MdButtonModule, MdButtonToggleModule,
    MdCardModule, MdTooltipModule, MdProgressSpinnerModule, MdAutocompleteModule, MdInputModule],
  exports: [MdSidenavModule, MdToolbarModule, MdIconModule, MdButtonModule, MdButtonToggleModule,
    MdCardModule, MdTooltipModule, MdProgressSpinnerModule, MdAutocompleteModule, MdInputModule],
})
export class MaterialComponentsModule { }