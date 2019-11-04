import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable()
export class UserService {

  constructor(private  httpClient: HttpClient) { }


  getUserById(id: number): Observable<User> {
    const params = '?id=' + id;
    return this.httpClient.get<User>('/api/user' + params);
  }

  getAll(): Observable<Array<User>> {
    return this.httpClient.get<any>('/api/user/getAll');
  }

  updateUser(user: User): Observable<any> {
    return this.httpClient.post<any>('/api/user', user);
  }


}
