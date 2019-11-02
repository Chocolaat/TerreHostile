import { Component, OnInit } from '@angular/core';
import { MapPlayerSelection } from './model/mapEditorSelection';
import * as MapJsModule from 'src/assets/js/map/map.js';
import { BuildingConfiguration } from 'src/app/_shared/configuration/model/buildingConfiguration';

@Component({
  selector: 'app-map-player',
  template: `
  <section id="mapContainer">
  <app-map-player-header></app-map-player-header>
  <app-map-view appInputEventDirective (mouseEvent)='mouseEvent($event)'></app-map-view>
  <app-map-player-toolbar
  (mapPlayerToolbarBuildingSelectionEvent)="onBuildingSelection($event)">
  </app-map-player-toolbar>
</section>
  `,
  styleUrls: ['./mapPlayer.component.css']
})
export class MapPlayerComponent implements OnInit {

  currentBuildingSelection: BuildingConfiguration = new BuildingConfiguration();

  constructor() { }


  mouseEvent(event: MouseEvent) {
    switch (event.type) {
      case 'click': this.onClickEvent(event);
        break;
      case 'mouseup': this.onMouseUpEvent(event);
        break;
      case 'mousedown': this.onMouseDownEvent(event);
        break;
      case 'mousemove': this.onMouseMove(event);
        break;
      default:
        break;
    }
  }

  onClickEvent(event: MouseEvent) {
     if (this.currentBuildingSelection !== undefined) {
      MapJsModule.updateTile(event, 1, this.currentBuildingSelection.type);
    }
  }


  onMouseUpEvent(event: MouseEvent) {
/*     const currentTile = (MapJsModule.mapLayers[0].getXYCoords(event.offsetX, event.offsetY));
    MapJsModule.updateTile(event, this.currentMapEditorSelection.currentLayerSelected,
      this.currentMapEditorSelection.currentTypeSelected, this.beginTileForSquareTerrainUpdate, currentTile);
    this.beginTileForSquareTerrainUpdate = undefined;
    this.mouseMovedWhileDown = false; */
  }

  onMouseDownEvent(event: MouseEvent) {


/*     if (event.ctrlKey) {
      this.beginTileForSquareTerrainUpdate = MapJsModule.mapLayers[0].getXYCoords(event.offsetX,
        event.offsetY);
    } else {
      this.mouseMovedWhileDown = true;
    } */
  }

  onMouseMove(event: MouseEvent) {

    if (this.currentBuildingSelection !== undefined) {
      const currentTile = (MapJsModule.mapLayers[0].getXYCoords(event.offsetX, event.offsetY));

      // Apply mouse rollover via mouse location X & Y
      MapJsModule.mapLayers[0].applyFocus(currentTile.x, currentTile.y);
      // Apply mouse rollover via mouse location X & Y
      MapJsModule.mapLayers[0].applyCircleFocus(currentTile.x, currentTile.y, this.currentBuildingSelection.vision);
    }
  }


  onBuildingSelection(event: BuildingConfiguration) {
    this.currentBuildingSelection = event;
  }


  ngOnInit() {
  }

}
