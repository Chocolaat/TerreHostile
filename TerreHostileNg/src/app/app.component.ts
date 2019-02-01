import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
      <app-header></app-header>
      <app-user-map-view></app-user-map-view>
  `,
   styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TerreHostileNg';

  ngOnInit(): void {
  }

}
