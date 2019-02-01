import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ElementRef} from '@angular/core';
declare function launchRequire(): any;

@Component({
  selector: 'app-user-map-view',
  template: `

  <p>
  user-map-view works!
</p>
<div id="mapView"></div>
<app-map-view><app-map-view>
  `,
  styleUrls: ['./user-map-view.component.css']
})
export class UserMapViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    launchRequire();
  }

}
