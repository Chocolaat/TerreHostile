import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-management',
  template: `
  <ul class="nav nav-pills nav-stacked col-md-2">
    <li class="active"><a href="#tab_a" data-toggle="pill">Pill A</a></li>
    <li><a href="#tab_b" data-toggle="pill">Pill B</a></li>
    <li><a href="#tab_c" data-toggle="pill">Pill C</a></li>
    <li><a href="#tab_d" data-toggle="pill">Pill D</a></li>
  </ul>


  <div class="tab-content col-md-10">
          <div class="tab-pane active" id="tab_a">
          <app-admin-management-users></app-admin-management-users>
          </div>
          <div class="tab-pane" id="tab_b">
               <h4>Pane B</h4>
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                  ac turpis egestas.</p>
          </div>
          <div class="tab-pane" id="tab_c">
               <h4>Pane C</h4>
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                  ac turpis egestas.</p>
          </div>
          <div class="tab-pane" id="tab_d">
               <h4>Pane D</h4>
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                  ac turpis egestas.</p>
          </div>
  </div><!-- tab content -->
  `,
  styleUrls: ['./admin-management.component.css']
})
export class AdminManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
