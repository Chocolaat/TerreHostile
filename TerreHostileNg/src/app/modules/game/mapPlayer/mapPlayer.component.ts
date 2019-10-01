import { Component, OnInit } from '@angular/core';
import { MapPlayerSelection } from './model/mapEditorSelection';
import * as MapJsModule from 'src/assets/js/map/map.js';

@Component({
  selector: 'app-map-player',
  template: `
  <section id="mapContainer">
  <app-map-player-header></app-map-player-header>
  <app-map-view appInputEventDirective (mouseEvent)='mouseEvent($event)'></app-map-view>
  <app-map-player-toolbar
  (mapPlayerToolbarLayerSelectionEvent)="onLayerSelection($event)"
  (mapPlayerToolbarTypeSelectionEvent)="onTypeSelection($event)">
  </app-map-player-toolbar>
</section>
  `,
  styleUrls: ['./mapPlayer.component.css']
})
export class MapPlayerComponent implements OnInit {

  currentMapPlayerSelection: MapPlayerSelection = new MapPlayerSelection();

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
     if (this.currentMapPlayerSelection.currentLayerSelected !== undefined && this.currentMapPlayerSelection.currentTypeSelected !== undefined) {
      MapJsModule.updateTile(event, this.currentMapPlayerSelection.currentLayerSelected, this.currentMapPlayerSelection.currentTypeSelected);
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

    if (this.currentMapPlayerSelection.currentTypeSelected !== undefined) {
      const currentTile = (MapJsModule.mapLayers[0].getXYCoords(event.offsetX, event.offsetY));

      MapJsModule.mapLayers[0].applyFocus(currentTile.x, currentTile.y); // Apply mouse rollover via mouse location X & Y
    }
  }

  onLayerSelection(event: number) {
    this.currentMapPlayerSelection.currentLayerSelected = event;
    // this.currentMapPlayerSelection.currentTypeSelected = 0;
  }
  onTypeSelection(event: number) {
    this.currentMapPlayerSelection.currentTypeSelected = event;
  }


  ngOnInit() {
  }

}
