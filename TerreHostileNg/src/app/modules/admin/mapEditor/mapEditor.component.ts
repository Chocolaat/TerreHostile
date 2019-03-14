import { Component, OnInit, HostListener } from '@angular/core';

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


  @HostListener('nav:mousedown', ['$event'])
  onKeyUp(ev: MouseEvent) {
    // do something meaningful with it
    console.log(`The user just pressed ${ev.button}!`);
  }

}
