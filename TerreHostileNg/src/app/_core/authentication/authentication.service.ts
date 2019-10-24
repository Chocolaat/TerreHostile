import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/_shared/user/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

/*   authenticate(username: string, password: string) {
    return this.httpClient.get<User>('/api/validateLogin').pipe(
     map(
       userData => {
        sessionStorage.setItem('username', username);
        const authString = 'Basic ' + btoa(username + ':' + password);
        sessionStorage.setItem('basicauth', authString);
        return userData;
       }
     )

    );
  } */

  authenticate(username: string, password: string) {
    return this.httpClient.post<any>('/api/authenticate', {username, password}).pipe(
     map(
       userData => {
        sessionStorage.setItem('username',username);
        const tokenStr = 'Bearer ' + userData.token;
        sessionStorage.setItem('token', tokenStr);
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
