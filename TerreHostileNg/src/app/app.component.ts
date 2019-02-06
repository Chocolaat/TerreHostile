import { Component, OnInit } from '@angular/core';
declare function launchRequire(): any;


@Component({
  selector: 'app-root',
  template: `
      <app-header></app-header>
      <router-outlet></router-outlet>
  `,
   styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TerreHostileNg';

  ngOnInit(): void {
    launchRequire();
  }

}
