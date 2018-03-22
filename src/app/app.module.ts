import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { favoritesReducer } from './ngrx/favorites/favorites.reducer'
import { FavoritesState } from './ngrx/favorites/favorites.model';

// Components
import { AppComponent } from './app.component';

import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';

// Services
import { ServicesModule } from 'app/services';

// Shared module
import { MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';
import 'hammerjs';
import { FavoritesSelector } from './ngrx/favorites/favorites.selector';
import { FavoritesAction } from './ngrx/favorites/favorites.action';

export interface AppState {
    favorites: FavoritesState
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, BrowserAnimationsModule,
        MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule,
        AppRoutingModule,
        PagesModule,
        StoreModule.forRoot({ favorites: favoritesReducer })
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        FavoritesAction,
        FavoritesSelector
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule { }
