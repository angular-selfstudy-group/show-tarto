import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieDetailComponent } from './movie-detail.component';

// TODO: when SeriesComponent is ready, modify the child routing according to it
const movieDetailRoutes: Routes = [
  {
    path: 'movieDetail/:id', component: MovieDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(movieDetailRoutes)],
  exports: [RouterModule]
})
export class MovieDetailRoutingModule { }
