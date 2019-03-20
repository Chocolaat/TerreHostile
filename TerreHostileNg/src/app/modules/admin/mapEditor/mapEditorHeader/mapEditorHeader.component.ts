import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
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
    this.mapService.updateMap(beginX, beginY, size).subscribe(() => this.mapEditorHeaderDisabled = false);
  }

}
