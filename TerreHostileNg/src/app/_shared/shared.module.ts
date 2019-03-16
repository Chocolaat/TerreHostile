import { MouseEventDirective } from './map/map-view/mouse-event/mouse-event.directive';
import { GameConfigurationService } from './configuration/services/game-configuration.service';
import { CoreModule } from 'src/app/_core/core_module';
import { MapViewComponent } from './map/map-view/map-view.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MapService } from './map/services/map.service';

@NgModule({
  declarations: [
    MapViewComponent,
    MouseEventDirective
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  exports: [
    MapViewComponent,
    CoreModule,
    BrowserModule,
    MouseEventDirective
  ],
  providers: [
    MapService
  ]
})
export class SharedModule { }
