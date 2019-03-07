import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-player',
  template: `
  <div> Carte du monde </div>
  <section id="mapContainer">
  <app-map-view></app-map-view>
  </section>
  `,
  styleUrls: ['./mapPlayer.component.css']
})
export class MapPlayerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
