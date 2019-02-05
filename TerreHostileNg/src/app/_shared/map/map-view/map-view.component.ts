import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ElementRef} from '@angular/core';
declare function launchRequire(): any;

@Component({
  selector: 'app-map-view',
  template: `

  <p>
  user-map-view works!
</p>
<div id="mapView"></div>
  `
})
export class MapViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    launchRequire();
  }

}
