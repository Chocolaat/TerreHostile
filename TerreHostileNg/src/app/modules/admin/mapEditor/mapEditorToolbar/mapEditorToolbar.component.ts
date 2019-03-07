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
    <button type="button" class="mapToolBarItem"
    id="mapToolBarItemGroundType" (click)="showMapToolBarSubMenu()"> Type de terrain</button>
    <button type="button" class="mapToolBarItem"
      id="mapToolBarItemBuildings">Bâtiments</button>
    <button type="button" class="mapToolBarItem"
      id="mapToolBarItemTroops">Troupes</button>
    <button type="button" class="mapToolBarItem"
      id="mapToolBarItemResources">Ressources</button>
  </div>

    <div id="mapToolBarSubMenu" *ngIf="displaySubMenu">
      <ul ng-repeat="thing in things">
        <li>
          <button>Toto</button>
        </li>
   </ul>

   <ul>
   <li *ngFor="let building of buildingConfiguration | keyvalue">
       {{building.key}} --> {{building.value}}
   </li>
</ul>

  </div>

	</section>
  `,
  styleUrls: ['./mapEditorToolbar.component.css']
})
export class MapEditorToolbarComponent implements OnInit {

  displaySubMenu: boolean;
  buildingConfiguration: Map<number, BuildingConfiguration>;
  resourceConfiguration: Map<number, ResourceConfiguration>;
  unitConfiguration: Map<number, UnitConfiguration>;
  groundConfiguration: Map<number, GroundConfiguration>;


  constructor(private gameConfigurationService: GameConfigurationService) { }

  ngOnInit() {
  }


  showMapToolBarSubMenu() {
    this.gameConfigurationService.getBuildingConfiguration().subscribe(
      (gameConf) => {
        this.buildingConfiguration = gameConf;
        console.log(gameConf);
        this.displaySubMenu = true;
    });
  }

}
