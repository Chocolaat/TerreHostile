import { MapEditorModule } from './modules/mapEditor/mapEditor.module';
import { MapPlayerModule } from './modules/mapPlayer/mapPlayer.module';
import { HomeModule } from './modules/home/home.module';
import { MapViewComponent } from './_shared/map/map-view/map-view.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WindowRef } from './_core/window.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_core/header/header.component';
import { LoginComponent } from './_core/login/login.component';
import { HomeComponent } from './modules/home/home/home.component';
import { CoreModule } from './_core/core_module';
import { SharedModule } from './_shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    HomeModule,
    MapPlayerModule,
    MapEditorModule
  ],
  providers: [ WindowRef ],
  bootstrap: [AppComponent]
})
export class AppModule { }
