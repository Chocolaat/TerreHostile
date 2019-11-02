import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/_shared/user/user';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  private user = new BehaviorSubject(new User());
  currentUser = this.user.asObservable();

  authenticate(username: string, password: string) {
    return this.httpClient.post<any>('/api/authenticate', {username, password}).pipe(
     map(
       userData => {
        sessionStorage.setItem('username', username);
        const tokenStr = 'Bearer ' + userData.jwttoken;
        sessionStorage.setItem('token', tokenStr);
        this.user.next(userData.userDetails);
        return userData;
       }
     )

    );
  }

  register(name: string, password: string) {
    return this.httpClient.post<any>('/api/register', {name, password}).pipe(
     map(
       userData => {
        return userData;
       }
     )

    );
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
  }
}
