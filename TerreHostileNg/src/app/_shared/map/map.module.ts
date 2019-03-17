
import { CoreModule } from 'src/app/_core/core_module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InfoPaneComponent } from './map-view/infoPane/info-pane.component';
import { MapViewComponent } from './map-view/map-view.component';
import { MapService } from './services/map.service';
import { InputEventDirective } from './map-view/input-event/input-event.directive';

@NgModule({
  declarations: [
    MapViewComponent,
    InfoPaneComponent,
    InputEventDirective
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  exports: [
    CoreModule,
    BrowserModule,
    MapViewComponent,
    InfoPaneComponent,
    InputEventDirective
  ],
  providers: [
      MapService
  ]
})
export class MapModule { }
