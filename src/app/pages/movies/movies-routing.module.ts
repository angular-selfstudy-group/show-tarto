import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent, MovieFilterType } from './movies.component';

const moviesRoutes: Routes = [
    {
        path: 'movies',
        children: [
            {
                path: 'all', component: MoviesComponent,
                data: {
                    filterType: MovieFilterType.All
                }
            },
            {
                path: 'watchlist', component: MoviesComponent,
                data: {
                    filterType: MovieFilterType.Watchlist
                }
            },
            {
                path: 'favorites', component: MoviesComponent,
                data: {
                    filterType: MovieFilterType.Favorites
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(moviesRoutes)],
    exports: [RouterModule]
})
export class MoviesRoutingModule { }
