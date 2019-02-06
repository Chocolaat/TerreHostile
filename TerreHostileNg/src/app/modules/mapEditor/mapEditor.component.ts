import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-editor',
  template: `
  <div> Éditeur de carte </div>
  <app-map-view></app-map-view>
  `
})
export class MapEditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
