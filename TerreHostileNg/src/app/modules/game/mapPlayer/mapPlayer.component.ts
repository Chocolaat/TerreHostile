import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-player',
  template: `
  <section id="mapContainer">
  <app-map-view appInputEventDirective (mouseEvent)='mouseClick($event)'></app-map-view>
</section>
  `,
  styleUrls: ['./mapPlayer.component.css']
})
export class MapPlayerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
