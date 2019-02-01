import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WindowRef } from './_core/window.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_core/header/header.component';
import { LoginComponent } from './_core/login/login.component';
import { MapViewComponent } from './map/_shared/map-view/map-view.component';
import { UserMapViewComponent } from './map/user-map-view/user-map-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    MapViewComponent,
    UserMapViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ WindowRef ],
  bootstrap: [AppComponent]
})
export class AppModule { }
