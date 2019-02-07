import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-editor',
  template: `
  <div> Éditeur de carte </div>
  <section id="mapContainer">
    <app-map-view></app-map-view>
    <app-map-editor-toolbar></app-map-editor-toolbar>
  </section>
  `,
  styleUrls: ['./mapEditor.component.css']
})
export class MapEditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
