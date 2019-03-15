import { GroundConfiguration } from './../../../../_shared/configuration/model/groundConfiguration';
import { BuildingConfiguration } from './../../../../_shared/configuration/model/buildingConfiguration';
import { GameConfigurationService } from './../../../../_shared/configuration/services/game-configuration.service';
import { Component, OnInit } from '@angular/core';
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


    <div id="mapToolBarSubMenu" *ngIf="currentSubMenu == 'building'">
        <button class="mapToolBarSubMenuItem" *ngFor="let building of buildingConfigurations | keyvalue"
        background-image: [ngStyle]="{'background-image': 'url('+ building.value.imgPath +')'}">{{building.value.name}}</button>
    </div>
    <div id="mapToolBarSubMenu" *ngIf="currentSubMenu == 'resource'">
    <button class="mapToolBarSubMenuItem" *ngFor="let resource of resourceConfigurations | keyvalue"
    background-image: [ngStyle]="{'background-image': 'url('+ resource.value.imgPath +')'}">{{resource.value.name}}</button>
    </div>
    <div id="mapToolBarSubMenu" *ngIf="currentSubMenu == 'unit'">
        <button class="mapToolBarSubMenuItem" *ngFor="let unit of unitConfigurations | keyvalue"
        background-image: [ngStyle]="{'background-image': 'url('+ unit.value.imgPath +')'}">{{unit.value.name}}</button>
    </div>
     <div id="mapToolBarSubMenu" *ngIf="currentSubMenu == 'ground'">
        <button class="mapToolBarSubMenuItemGround"  *ngFor="let ground of groundConfigurations | keyvalue"
        background-image: [ngStyle]="{'background-image': 'url('+ ground.value.imgPath +')'}">{{ground.value.name}}</button>
    </div>



	</section>
  `,
  styleUrls: ['./mapEditorToolbar.component.css']
})
export class MapEditorToolbarComponent implements OnInit {

  currentSubMenu: string;
  buildingConfigurations: Map<number, BuildingConfiguration>;
  resourceConfigurations: Map<number, ResourceConfiguration>;
  unitConfigurations: Map<number, UnitConfiguration>;
  groundConfigurations: Map<number, GroundConfiguration>;


  constructor(private gameConfigurationService: GameConfigurationService) { }

  ngOnInit() {
  }


  showMapToolBarSubMenu(subMenuToDisplay: string) {
    switch (subMenuToDisplay) {
      case 'building': {
        this.gameConfigurationService.getBuildingConfiguration().subscribe(
          (gameConf) => {
            this.buildingConfigurations = gameConf;
        });
         break;
      }
      case 'unit': {
        this.gameConfigurationService.getUnitConfiguration().subscribe(
          (unitConf) => {
            this.unitConfigurations = unitConf;
        });
         break;
      }
      case 'ground': {
        this.gameConfigurationService.getGroundConfiguration().subscribe(
          (groundConf) => {
            this.groundConfigurations = groundConf;
        });
         break;
      }
      case 'resource': {
        this.gameConfigurationService.getResourceConfiguration().subscribe(
          (resourceConf) => {
            this.resourceConfigurations = resourceConf;
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
