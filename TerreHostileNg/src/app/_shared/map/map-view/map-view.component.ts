import { Component, OnInit } from '@angular/core';
declare function launchMap(): any;

@Component({
  selector: 'app-map-view',
  template: `

<div id="mapView">
<canvas id="mapViewCanvas"></canvas>
</div>
  `,
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    launchMap();
  }

}
