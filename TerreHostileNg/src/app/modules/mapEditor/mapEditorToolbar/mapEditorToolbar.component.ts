import { Component, OnInit } from '@angular/core';

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

    <div id="mapToolBarSubMenu" ng-show="showSubMenu()">
      <ul ng-repeat="thing in things">
        <li>
          <button>Toto</button>
        </li>
   </ul>
  </div>

	</section>
  `,
  styleUrls: ['./mapEditorToolbar.component.css']
})
export class MapEditorToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showMapToolBarSubMenu() {
    console.log('hey');
  // NOTHING
}

}
