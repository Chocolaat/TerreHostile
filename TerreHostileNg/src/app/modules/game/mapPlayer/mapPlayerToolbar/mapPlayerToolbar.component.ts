import { MapService } from 'src/app/_shared/map/services/map.service';
import { GroundConfiguration } from '../../../../_shared/configuration/model/groundConfiguration';
import { BuildingConfiguration } from '../../../../_shared/configuration/model/buildingConfiguration';
import { GameConfigurationService } from '../../../../_shared/configuration/services/game-configuration.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ResourceConfiguration } from 'src/app/_shared/configuration/model/resourceConfiguration';
import { UnitConfiguration } from 'src/app/_shared/configuration/model/unitConfiguration';


@Component({
  selector: 'app-map-player-toolbar',
  template: `
  <section id="mapPlayerToolbar">
  <div id="mapToolBar">
  <button type="button" class="mapToolBarItem" id="mapToolBarItemBuildings"
  (click)="showMapToolBarSubMenu('building')">Bâtiments</button>
</div>


<div id="mapToolBarSubMenu" *ngIf="currentSubMenu == 'building'">
    <button class="mapToolBarSubMenuItem" *ngFor="let building of buildingConfigurations | keyvalue"
    background-image: [ngStyle]="{'background-image': 'url('+ building.value.imgPath +')'}"
    (click)="this.mapPlayerToolbarTypeSelectionEvent.emit(building.value.type)">
    {{building.value.name}}
    </button>
</div>



	</section>
  `,
  styleUrls: ['./mapPlayerToolbar.component.css']
})
export class MapPlayerToolbarComponent implements OnInit {

  @Output() mapPlayerToolbarLayerSelectionEvent = new EventEmitter<number>();
  @Output() mapPlayerToolbarTypeSelectionEvent = new EventEmitter<number>();

  currentSubMenu: string;
  buildingConfigurations: Array<BuildingConfiguration>;

  constructor(private gameConfigurationService: GameConfigurationService, private mapService: MapService) { }


  ngOnInit() {
  }

  showMapToolBarSubMenu(subMenuToDisplay: string) {
    switch (subMenuToDisplay) {
      case 'building': {
        this.gameConfigurationService.getBuildingConfiguration().subscribe(
          (gameConf) => {
            this.buildingConfigurations = gameConf;
        });
        this.mapPlayerToolbarLayerSelectionEvent.emit(1);
         break;
      }
      default: {
        this.currentSubMenu = undefined;
         break;
      }
   }
    this.currentSubMenu = subMenuToDisplay;
  }

}
