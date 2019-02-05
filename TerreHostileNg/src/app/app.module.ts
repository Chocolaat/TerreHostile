import { MapViewComponent } from './_shared/map/map-view/map-view.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WindowRef } from './_core/window.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_core/header/header.component';
import { LoginComponent } from './_core/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    MapViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ WindowRef ],
  bootstrap: [AppComponent]
})
export class AppModule { }
