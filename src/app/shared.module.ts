import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    exports: [
        CommonModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule
            ],
    providers: [],
    bootstrap: []
})
export class SharedModule { }
