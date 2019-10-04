import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-header',
  template: `

  <nav role='navigation'>
    <ul class="navbar-nav">
      <li><a *ngIf="!loginService.isUserLoggedIn()" routerLink="/login" class="nav-link">Login</a></li>
      <li><a *ngIf="loginService.isUserLoggedIn()" routerLink="/logout" class="nav-link">LogOut</a></li>
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

  constructor(private loginService: AuthenticationService) { }

  ngOnInit() {
  }

}
