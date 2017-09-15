import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared.module'

import { AutoCompleteComponent } from './autocomplete.component';
import { MaterialComponentsModule } from 'app/material.components.module';

@NgModule({
    imports: [SharedModule, MaterialComponentsModule],
    exports: [AutoCompleteComponent],
    declarations: [AutoCompleteComponent],
    providers: [],
})
export class AutoCompleteModule { }
