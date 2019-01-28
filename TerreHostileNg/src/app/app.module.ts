import { JsisoModule } from './_libs/jsiso/jsiso.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    UserMapViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JsisoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
