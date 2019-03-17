
import { GameConfigurationService } from './configuration/services/game-configuration.service';
import { CoreModule } from 'src/app/_core/core_module';
import { MapViewComponent } from './map/map-view/map-view.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MapService } from './map/services/map.service';
import { MapModule } from './map/map.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  exports: [
    MapModule,
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule
  ]
})
export class SharedModule { }
