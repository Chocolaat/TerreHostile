import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { MapService } from 'src/app/_shared/map/services/map.service';
import * as MapJsModule from 'src/assets/js/map/map.js';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-map-player-header',
  template: `
  <div id="mapPlayerHeader">


  </div>
  `,
  styleUrls: ['./mapPlayerHeader.component.css']
})
export class MapPlayerHeaderComponent implements OnInit {

  mapEditorHeaderDisabled: boolean;

  constructor(private mapService: MapService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }


}
