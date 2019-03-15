import { SharedModule } from './../../../_shared/shared.module';
import { MapEditorToolbarComponent } from './mapEditorToolbar/mapEditorToolbar.component';
import { MapEditorComponent } from './mapEditor.component';
import { NgModule } from '@angular/core';
import { GameConfigurationService } from 'src/app/_shared/configuration/services/game-configuration.service';
import { MapEditorHeaderComponent } from './mapEditorHeader/mapEditorHeader.component';

@NgModule({
  declarations: [
    MapEditorComponent,
    MapEditorToolbarComponent,
    MapEditorHeaderComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [
    GameConfigurationService
  ]
})
export class MapEditorModule { }
