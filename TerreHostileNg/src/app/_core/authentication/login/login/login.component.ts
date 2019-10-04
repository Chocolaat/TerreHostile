import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-login',
  template: `
  <div class="container">
    <div>
      User Name : <input type="text" name="username" [(ngModel)]="username">
      Password : <input type="password" name="password" [(ngModel)]="password">
    </div>
    <button (click)=checkLogin() class="btn btn-success">
      Login
    </button>
</div>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'javainuse';
  password = '';
  invalidLogin = false;

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.router.navigate(['']);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
