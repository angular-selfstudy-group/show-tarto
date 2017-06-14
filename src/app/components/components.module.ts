import { NgModule } from '@angular/core';
import { AutoCompleteModule } from "app/components/autocomplete/autocomplete.module";

@NgModule({
    imports: [AutoCompleteModule],
    exports: [AutoCompleteModule],
    declarations: [],
    providers: [],
})
export class ComponentsModule { }
