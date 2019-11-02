import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable()
export class UserService {

  constructor(private  httpClient: HttpClient) { }




  getUserById(id: number): Observable<any> {
    const params = '?id=' + id;
    return this.httpClient.get<any>('/api/user' + params);
  }


}
