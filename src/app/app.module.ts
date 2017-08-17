import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// Components
import { AppComponent } from './app.component';

import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';

// Services
import { ServicesModule } from 'app/services';

// Shared module
import { SharedModule } from './shared.module';
import { MaterialComponentsModule } from "app/material.components.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    MaterialComponentsModule,
    AppRoutingModule,
    ServicesModule,
    ComponentsModule,
    PagesModule
  ],
  exports: [
    MaterialComponentsModule,
    AppRoutingModule,
    ServicesModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
