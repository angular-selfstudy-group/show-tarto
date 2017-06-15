import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeriesComponent } from './series.component';

// TODO: when SeriesComponent is ready, modify the child routing according to it
const seriesRoutes: Routes = [
  {
    path: 'series', component: SeriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(seriesRoutes)],
  exports: [RouterModule]
})
export class SeriesRoutingModule { }
