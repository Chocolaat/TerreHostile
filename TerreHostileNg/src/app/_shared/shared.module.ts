import { GameConfigurationService } from './configuration/services/game-configuration.service';
import { CoreModule } from 'src/app/_core/core_module';
import { MapViewComponent } from './map/map-view/map-view.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    MapViewComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  exports: [
    MapViewComponent,
    CoreModule,
    BrowserModule
  ]
})
export class SharedModule { }
