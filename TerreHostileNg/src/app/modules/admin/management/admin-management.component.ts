import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-management',
  template: `
  <ul class="nav nav-pills nav-stacked col-md-2">
    <li class="active"><a href="#tab_a" data-toggle="pill">Users</a></li>
    <li><a href="#tab_b" data-toggle="pill">Buildings</a></li>
    <li><a href="#tab_c" data-toggle="pill">Resources</a></li>
    <li><a href="#tab_d" data-toggle="pill">Troops</a></li>
  </ul>


  <div class="tab-content col-md-10">
          <div class="tab-pane active" id="tab_a">
          <app-admin-management-users></app-admin-management-users>
          </div>
          <div class="tab-pane" id="tab_b">
          <app-admin-management-buildings></app-admin-management-buildings>
          </div>
          <div class="tab-pane" id="tab_c">
          <app-admin-management-resources></app-admin-management-resources>
          </div>
          <div class="tab-pane" id="tab_d">
          <app-admin-management-troops></app-admin-management-troops>
          </div>
  </div>
  `,
  styleUrls: ['./admin-management.component.css']
})
export class AdminManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
