import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared.module'

import { AutoCompleteComponent } from './autocomplete.component';

@NgModule({
    imports: [SharedModule],
    exports: [AutoCompleteComponent],
    declarations: [AutoCompleteComponent],
    providers: [],
})
export class AutoCompleteModule { }
