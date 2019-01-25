import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <app-header></app-header>
      <app-user-map-view></app-user-map-view>
  `,
   styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TerreHostileNg';
}
