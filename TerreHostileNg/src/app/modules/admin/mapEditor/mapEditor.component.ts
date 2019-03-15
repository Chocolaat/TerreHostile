import { Component, OnInit, HostListener } from '@angular/core';
import * as MapJsModule from 'src/assets/js/map/map.js';
import { MapEditorSelection } from './model/mapEditorSelection';

@Component({
  selector: 'app-map-editor',
  template: `
  <div> Éditeur de carte </div>
  <section id="mapContainer">
    <app-map-view appMouseEventDirective (mouseUp)='mouseUp($event)'></app-map-view>
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

  constructor() { }


  mouseUp(event: any) {
    MapJsModule.updateTile(event, this.currentMapEditorSelection.currentLayerSelected, this.currentMapEditorSelection.currentTypeSelected);
  }

  onLayerSelection(event: number)
  {
    this.currentMapEditorSelection.currentLayerSelected = event;
  }
  onTypeSelection(event: number)
  {
    this.currentMapEditorSelection.currentTypeSelected = event;
  }


  ngOnInit() {
  }

}
