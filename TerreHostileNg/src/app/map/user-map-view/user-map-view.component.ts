import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-map-view',
  template: `
  <p>
  user-map-view works!
</p>
<app-map-view><app-map-view>
  `,
  styleUrls: ['./user-map-view.component.css']
})
export class UserMapViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
