import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
      <app-header></app-header>
      <app-map-view></app-map-view>
  `,
   styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TerreHostileNg';

  ngOnInit(): void {
  }

}
