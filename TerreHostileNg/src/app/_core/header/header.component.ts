import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <app-login></app-login>
  <nav role='navigation'>
  <ul>
    <li><a th:href="@{/home}">Accueil</a></li>
    <li><a>Administration</a>
      <ul>
        <li><a th:href="@{/admin/mapEditor}">Éditeur de carte</a></li>
        <li><a th:href="@{/admin/mapEditor}">Forum</a></li>
        <li><a th:href="@{/admin/mapEditor}">Monstres</a></li>
        <li><a th:href="@{/admin/mapEditor}">Ressources</a></li>
        <li><a th:href="@{/admin/mapEditor}">Configuration</a></li>
      </ul>
    </li>
    <li><a>Joueurs</a>
      <ul>
        <li><a th:href="@{/user/mapView}">Carte du monde</a></li>
      </ul>
    </li>
    <li><a href="#">Contact Us</a></li>
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
