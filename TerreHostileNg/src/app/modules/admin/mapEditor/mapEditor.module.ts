import { SharedModule } from './../../../_shared/shared.module';
import { MapEditorToolbarComponent } from './mapEditorToolbar/mapEditorToolbar.component';
import { MapEditorComponent } from './mapEditor.component';
import { NgModule } from '@angular/core';
import { GameConfigurationService } from 'src/app/_shared/configuration/services/game-configuration.service';
import { MapEditorHeaderComponent } from './mapEditorHeader/mapEditorHeader.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material';

@NgModule({
  declarations: [
    MapEditorComponent,
    MapEditorToolbarComponent,
    MapEditorHeaderComponent
  ],
  imports: [
    SharedModule,
    MatSnackBarModule
  ],
  providers: [
    GameConfigurationService,
    MatSnackBar
  ]
})
export class MapEditorModule { }
