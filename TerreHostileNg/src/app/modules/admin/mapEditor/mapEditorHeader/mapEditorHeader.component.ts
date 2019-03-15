import { GroundConfiguration } from './../../../../_shared/configuration/model/groundConfiguration';
import { BuildingConfiguration } from './../../../../_shared/configuration/model/buildingConfiguration';
import { GameConfigurationService } from './../../../../_shared/configuration/services/game-configuration.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ResourceConfiguration } from 'src/app/_shared/configuration/model/resourceConfiguration';
import { UnitConfiguration } from 'src/app/_shared/configuration/model/unitConfiguration';
import { MapEditorSelection } from '../model/mapEditorSelection';


@Component({
  selector: 'app-map-editor-header',
  template: `
  <button>Save map</button>
  <button>GetXYMap</button>
  `,
  styleUrls: ['./mapEditorHeader.component.css']
})
export class MapEditorHeaderComponent implements OnInit {


  constructor(private gameConfigurationService: GameConfigurationService) { }

  ngOnInit() {
  }

}
