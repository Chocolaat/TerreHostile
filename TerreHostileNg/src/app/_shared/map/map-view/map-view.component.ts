import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ElementRef} from '@angular/core';
declare function launchRequire(): any;

@Component({
  selector: 'app-map-view',
  template: `

  <section id="mapContainer">
  <section id="mapFragment">
<div id="mapView">
<canvas id="mapViewCanvas"></canvas>
</div>
</section>
</section>
  `,
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    launchRequire();
  }

}
