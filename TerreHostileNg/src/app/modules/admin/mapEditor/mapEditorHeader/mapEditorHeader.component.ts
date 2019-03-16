import { GroundConfiguration } from './../../../../_shared/configuration/model/groundConfiguration';
import { BuildingConfiguration } from './../../../../_shared/configuration/model/buildingConfiguration';
import { GameConfigurationService } from './../../../../_shared/configuration/services/game-configuration.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ResourceConfiguration } from 'src/app/_shared/configuration/model/resourceConfiguration';
import { UnitConfiguration } from 'src/app/_shared/configuration/model/unitConfiguration';
import { MapEditorSelection } from '../model/mapEditorSelection';
import { MapService } from 'src/app/_shared/map/services/map.service';
import * as MapJsModule from 'src/assets/js/map/map.js';


@Component({
  selector: 'app-map-editor-header',
  template: `
  <button (click)=saveMap()>Save map</button>
  <button>GetXYMap</button>
  `,
  styleUrls: ['./mapEditorHeader.component.css']
})
export class MapEditorHeaderComponent implements OnInit {


  constructor(private mapService: MapService) { }

  ngOnInit() {
  }

  saveMap()
  {
    this.mapService.saveMap(MapJsModule.map).subscribe();
  }

}
