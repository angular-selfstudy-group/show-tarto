import { NgModule } from '@angular/core';
import { DataService as DataServiceBase } from './';
import { DataService } from './data/data.service';

@NgModule({
    imports: [],
    providers: [
        { provide: DataServiceBase, useClass: DataService }
    ],
})
export class ServicesModule { }
