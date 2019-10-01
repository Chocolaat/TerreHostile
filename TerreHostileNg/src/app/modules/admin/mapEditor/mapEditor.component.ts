import { Component, OnInit, HostListener } from '@angular/core';
import * as MapJsModule from 'src/assets/js/map/map.js';
import { MapEditorSelection } from './model/mapEditorSelection';
import { Coord } from 'src/app/_core/model/Coord';

@Component({
  selector: 'app-map-editor',
  template: `
  <div> Éditeur de carte </div>
  <section id="mapContainer">
    <app-map-editor-header></app-map-editor-header>
    <app-map-view appInputEventDirective (mouseEvent)='mouseEvent($event)'></app-map-view>
    <app-map-editor-toolbar
    (mapEditorToolbarLayerSelectionEvent)="onLayerSelection($event)"
    (mapEditorToolbarTypeSelectionEvent)="onTypeSelection($event)">
    </app-map-editor-toolbar>
  </section>
  `,
  styleUrls: ['./mapEditor.component.css']
})
export class MapEditorComponent implements OnInit {

  currentMapEditorSelection: MapEditorSelection = new MapEditorSelection();

  beginTileForSquareTerrainUpdate: Coord;
  mouseMovedWhileDown = false;

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
/*     if (this.currentMapEditorSelection.currentLayerSelected !== undefined && this.currentMapEditorSelection.currentTypeSelected !== undefined) {
      MapJsModule.updateTile(event, this.currentMapEditorSelection.currentLayerSelected, this.currentMapEditorSelection.currentTypeSelected);
    } */
  }

  onMouseUpEvent(event: MouseEvent) {
    const currentTile = (MapJsModule.mapLayers[0].getXYCoords(event.offsetX, event.offsetY));
    MapJsModule.updateTile(event, this.currentMapEditorSelection.currentLayerSelected,
      this.currentMapEditorSelection.currentTypeSelected, this.beginTileForSquareTerrainUpdate, currentTile);
    this.beginTileForSquareTerrainUpdate = undefined;
    this.mouseMovedWhileDown = false;
  }

  onMouseDownEvent(event: MouseEvent) {
    if (event.ctrlKey) {
      this.beginTileForSquareTerrainUpdate = MapJsModule.mapLayers[0].getXYCoords(event.offsetX,
        event.offsetY);
    } else {
      this.mouseMovedWhileDown = true;
    }
  }

  onMouseMove(event: MouseEvent) {

    if (this.currentMapEditorSelection.currentTypeSelected !== undefined) {
      const currentTile = (MapJsModule.mapLayers[0].getXYCoords(event.offsetX, event.offsetY));

      MapJsModule.mapLayers[0].applyFocus(currentTile.x, currentTile.y); // Apply mouse rollover via mouse location X & Y

      if (this.beginTileForSquareTerrainUpdate && currentTile) {
        MapJsModule.mapLayers[0].applyLargeFocus(this.beginTileForSquareTerrainUpdate.x, currentTile.x,
          this.beginTileForSquareTerrainUpdate.y, currentTile.y); // Apply mouse rollover via mouse location X & Y
      } else if (this.mouseMovedWhileDown) {
        MapJsModule.updateTile(event, this.currentMapEditorSelection.currentLayerSelected, this.currentMapEditorSelection.currentTypeSelected);
      }
    }
  }

  onLayerSelection(event: number) {
    this.currentMapEditorSelection.currentLayerSelected = event;
    this.currentMapEditorSelection.currentTypeSelected = 0;
  }
  onTypeSelection(event: number) {
    this.currentMapEditorSelection.currentTypeSelected = event;
    console.log("layer = " + this.currentMapEditorSelection.currentLayerSelected);
    console.log("type = " + this.currentMapEditorSelection.currentTypeSelected);
  }


  ngOnInit() {
  }

}
