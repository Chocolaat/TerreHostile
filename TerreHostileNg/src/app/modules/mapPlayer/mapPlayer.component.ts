import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-player',
  template: `
  <div> Carte du monde </div>
  <app-map-view></app-map-view>
  `
})
export class MapPlayerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
