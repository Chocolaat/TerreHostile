import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-login',
  template: `
<form>
  <div class="form-group w-25">
    <label type="text" for="name">User name</label>
    <input class="form-control" name="name" placeholder="User name" [(ngModel)]="name">
  </div>
  <div class="form-group w-25">
    <label for="password">User name</label>
    <input class="form-control" type="password" name="password" placeholder="Password" [(ngModel)]="password">
  </div>
  <button (click)=checkLogin() class="btn btn-success">Login</button>
  <button (click)=register() class="btn btn-success">Register</button>
</form>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name = 'titi';
  password = 'titi';
  invalidLogin = false;

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    this.loginservice.authenticate(this.name, this.password).subscribe(
      data => {
        this.router.navigate(['']);
        this.invalidLogin = false;
      },
      error => {
        this.invalidLogin = true;
        console.log('invalidLogin');

      }
    );
  }

  register(){
    this.loginservice.register(this.name, this.password).subscribe(
      data => {
        this.router.navigate(['']);
        this.invalidLogin = false;
      },
      error => {
        this.invalidLogin = true;
        console.log('invalidLogin');
      }
    );
  }
}
