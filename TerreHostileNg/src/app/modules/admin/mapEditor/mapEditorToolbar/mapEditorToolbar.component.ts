import { MapService } from 'src/app/_shared/map/services/map.service';
import { GroundConfiguration } from './../../../../_shared/configuration/model/groundConfiguration';
import { BuildingConfiguration } from './../../../../_shared/configuration/model/buildingConfiguration';
import { GameConfigurationService } from './../../../../_shared/configuration/services/game-configuration.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ResourceConfiguration } from 'src/app/_shared/configuration/model/resourceConfiguration';
import { UnitConfiguration } from 'src/app/_shared/configuration/model/unitConfiguration';


@Component({
  selector: 'app-map-editor-toolbar',
  template: `
  <section id="mapEditorToolbar">
  <div id="mapToolBar">
  <button type="button" class="mapToolBarItem" id="mapToolBarItemGroundType"
  (click)="showMapToolBarSubMenu('ground')">Type de terrain</button>
  <button type="button" class="mapToolBarItem" id="mapToolBarItemBuildings"
  (click)="showMapToolBarSubMenu('building')">Bâtiments</button>
  <button type="button" class="mapToolBarItem" id="mapToolBarItemTroops"
  (click)="showMapToolBarSubMenu('unit')">Unités</button>
  <button type="button" class="mapToolBarItem" id="mapToolBarItemResources"
  (click)="showMapToolBarSubMenu('resource')">Ressources</button>
</div>

<div id="mapToolBarSubMenu" *ngIf="currentSubMenu == 'ground'">
  <button
  class="mapToolBarSubMenuItemGround"  *ngFor="let ground of groundConfigurations | keyvalue"
  background-image: [ngStyle]="{'background-image': 'url('+ ground.value.imgPath +')'}"
  (click)=this.mapEditorToolbarTypeSelectionEvent.emit(ground.value.type)>
  {{ground.value.name}}
  </button>
</div>

<div id="mapToolBarSubMenu" *ngIf="currentSubMenu == 'building'">
    <button class="mapToolBarSubMenuItem" *ngFor="let building of buildingConfigurations | keyvalue"
    background-image: [ngStyle]="{'background-image': 'url('+ building.value.imgPath +')'}"
    (click)="this.mapEditorToolbarTypeSelectionEvent.emit(building.value.type)">
    {{building.value.name}}
    </button>
</div>

<div id="mapToolBarSubMenu" *ngIf="currentSubMenu == 'resource'">
  <button class="mapToolBarSubMenuItem" *ngFor="let resource of resourceConfigurations | keyvalue"
  background-image: [ngStyle]="{'background-image': 'url('+ resource.value.imgPath +')'}"
  (click)="this.mapEditorToolbarTypeSelectionEvent.emit(resource.value.type)">
  {{resource.value.name}}
  </button>
</div>

<div id="mapToolBarSubMenu" *ngIf="currentSubMenu == 'unit'">
    <button class="mapToolBarSubMenuItem" *ngFor="let unit of unitConfigurations | keyvalue"
    background-image: [ngStyle]="{'background-image': 'url('+ unit.value.imgPath +')'}"
    (click)="this.mapEditorToolbarTypeSelectionEvent.emit(unit.value.type)">
    {{unit.value.name}}
    </button>
</div>


	</section>
  `,
  styleUrls: ['./mapEditorToolbar.component.css']
})
export class MapEditorToolbarComponent implements OnInit {

  @Output() mapEditorToolbarLayerSelectionEvent = new EventEmitter<number>();
  @Output() mapEditorToolbarTypeSelectionEvent = new EventEmitter<number>();

  currentSubMenu: string;
  buildingConfigurations: Map<number, BuildingConfiguration>;
  resourceConfigurations: Map<number, ResourceConfiguration>;
  unitConfigurations: Map<number, UnitConfiguration>;
  groundConfigurations: Map<number, GroundConfiguration>;

  constructor(private gameConfigurationService: GameConfigurationService, private mapService: MapService) { }


  ngOnInit() {
  }

  showMapToolBarSubMenu(subMenuToDisplay: string) {
    switch (subMenuToDisplay) {
      case 'ground': {
        this.gameConfigurationService.getGroundConfiguration().subscribe(
          (groundConf) => {
            this.groundConfigurations = groundConf;
        });
        this.mapEditorToolbarLayerSelectionEvent.emit(0);
         break;
      }
      case 'building': {
        this.gameConfigurationService.getBuildingConfiguration().subscribe(
          (gameConf) => {
            this.buildingConfigurations = gameConf;
        });
        this.mapEditorToolbarLayerSelectionEvent.emit(1);
         break;
      }
      case 'resource': {
        this.gameConfigurationService.getResourceConfiguration().subscribe(
          (resourceConf) => {
            this.resourceConfigurations = resourceConf;
        });
        this.mapEditorToolbarLayerSelectionEvent.emit(2);
         break;
      }
      case 'unit': {
        this.gameConfigurationService.getUnitConfiguration().subscribe(
          (unitConf) => {
            this.unitConfigurations = unitConf;
        this.mapEditorToolbarLayerSelectionEvent.emit(3);
        });
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
