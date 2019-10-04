import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `

<ul class="nav nav-pills">
  <li><a routerLinkActive="active" routerLink="/home">Home</a></li>
  <li><a routerLinkActive="active" routerLink="/login">Login</a></li>
  <li><a (click)="logout()">Logout</a></li>
</ul>

  <nav role='navigation'>
  <ul>
    <li><a routerLink="/home" routerLinkActive="myactive">Accueil</a></li>
    <li><a>Administration</a>
      <ul>
        <li><a routerLink="/mapEditor" routerLinkActive="myactive">Éditeur</a></li>
        <li><a routerLink="/mapEditor" routerLinkActive="myactive">Forum</a></li>
        <li><a routerLink="/mapEditor" routerLinkActive="myactive">Monstres</a></li>
        <li><a routerLink="/mapEditor" routerLinkActive="myactive">Ressources</a></li>
        <li><a routerLink="/mapEditor" routerLinkActive="myactive">Configuration</a></li>
      </ul>
    </li>
    <li><a>Joueurs</a>
      <ul>
        <li><a routerLink="/mapPlayer" routerLinkActive="myactive">Carte du monde</a></li>
      </ul>
    </li>
    <li><a>Contact Us</a></li>
  </ul>
</nav>
`,
styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
