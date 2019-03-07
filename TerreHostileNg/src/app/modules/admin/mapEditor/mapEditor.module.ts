import { SharedModule } from './../../../_shared/shared.module';
import { MapEditorToolbarComponent } from './mapEditorToolbar/mapEditorToolbar.component';
import { MapEditorComponent } from './mapEditor.component';
import { NgModule } from '@angular/core';
import { GameConfigurationService } from 'src/app/_shared/configuration/services/game-configuration.service';

@NgModule({
  declarations: [
    MapEditorComponent,
    MapEditorToolbarComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [
    GameConfigurationService
  ]
})
export class MapEditorModule { }
