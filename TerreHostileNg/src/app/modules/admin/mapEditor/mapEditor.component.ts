import { Component, OnInit, HostListener } from '@angular/core';
import * as MapJsModule from 'src/assets/js/map/map.js';

@Component({
  selector: 'app-map-editor',
  template: `
  <div> Éditeur de carte </div>
  <section id="mapContainer">
    <app-map-view appMouseEventDirective (mouseUp)='mouseUp($event)'></app-map-view>
    <app-map-editor-toolbar></app-map-editor-toolbar>
  </section>
  `,
  styleUrls: ['./mapEditor.component.css']
})
export class MapEditorComponent implements OnInit {

  constructor() { }


  mouseUp(event: any) {
    MapJsModule.updateTile(event, 0, 1);
  }


  ngOnInit() {
  }

}
