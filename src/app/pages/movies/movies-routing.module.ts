import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './movies.component';

// TODO: when MoviesComponent is ready, modify the child routing according to it
const moviesRoutes: Routes = [
  {
    path: 'movies', component: MoviesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(moviesRoutes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
