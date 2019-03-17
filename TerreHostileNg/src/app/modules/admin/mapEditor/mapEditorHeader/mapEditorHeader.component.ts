import { GroundConfiguration } from './../../../../_shared/configuration/model/groundConfiguration';
import { BuildingConfiguration } from './../../../../_shared/configuration/model/buildingConfiguration';
import { GameConfigurationService } from './../../../../_shared/configuration/services/game-configuration.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ResourceConfiguration } from 'src/app/_shared/configuration/model/resourceConfiguration';
import { UnitConfiguration } from 'src/app/_shared/configuration/model/unitConfiguration';
import { MapEditorSelection } from '../model/mapEditorSelection';
import { MapService } from 'src/app/_shared/map/services/map.service';
import * as MapJsModule from 'src/assets/js/map/map.js';

import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-map-editor-header',
  template: `
  <div id="mapEditorHeader">
    <button (click)=saveMap() [disabled]="mapEditorHeaderDisabled">Save map</button>

    <div id="getMap">
      <button id="getMapButton" (click)="getMap(beginX.value, beginY.value, size.value)" [disabled]="mapEditorHeaderDisabled">GetMap</button>

      <div id="getMapInputs">
        <input #beginX placeholder="beginX" type="number" />
        <input #beginY placeholder="beginY" type="number" />
        <input #size placeholder="size" type="number" />
      </div>

    </div>
  </div>
  `,
  styleUrls: ['./mapEditorHeader.component.css']
})
export class MapEditorHeaderComponent implements OnInit {

  mapEditorHeaderDisabled: boolean;

  constructor(private mapService: MapService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  saveMap() {
    this.mapEditorHeaderDisabled = true;
    this.mapService.saveMap(MapJsModule.map).subscribe( () => {
      this.mapEditorHeaderDisabled = false;
      this.snackBar.open('Saved', 'OK', {
        duration: 2000,
      });
    });
  }
  getMap(beginX: number, beginY: number, size: number) {
    this.mapEditorHeaderDisabled = true;
    this.mapService.getMapByXYAndSize(beginX, beginY, size).subscribe(
      (map) => {
        MapJsModule.setMap(map);
        this.mapEditorHeaderDisabled = false;
        this.snackBar.open('Saved', 'OK', {
          duration: 2000,
        });
    });
  }

}
