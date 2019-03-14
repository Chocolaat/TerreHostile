import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-map-editor',
  template: `
  <div> Éditeur de carte </div>
  <section id="mapContainer">
    <app-map-view appMouseEvent (onFocusOut)='appMouseEvent($event)'></app-map-view>
    <app-map-editor-toolbar></app-map-editor-toolbar>
  </section>
  `,
  styleUrls: ['./mapEditor.component.css']
})
export class MapEditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  appMouseEvent(event: any)
  {
    console.log('appMouseEvent');
    console.log(event);

    
  }



}
