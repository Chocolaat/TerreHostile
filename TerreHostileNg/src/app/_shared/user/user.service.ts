import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './user';
import { map } from 'rxjs/operators';
import { FilterSortPaginateParams } from '../ui-components/grids/model/filterSortPaginateParams';

@Injectable()
export class UserService {

  constructor(private  httpClient: HttpClient) { }


  getUserById(id: number): Observable<User> {
    const params = '?id=' + id;
    return this.httpClient.get<User>('/api/user' + params);
  }

  getAll(): Observable<Array<User>> {
    return this.httpClient.get<any>('/api/user/getAll').pipe(
      map(res =>  res['payload'])
  );
  }

  getAllForGrid(filterSortPaginateParams: FilterSortPaginateParams): Observable<Array<User>> {

    const params = new HttpParams()
    .set('filter', filterSortPaginateParams.filter)
    .set('sortOrder', filterSortPaginateParams.sortOrder)
    .set('pageNumber', filterSortPaginateParams.pageNumber.toString())
    .set('pageSize', filterSortPaginateParams.pageSize.toString());
    return this.httpClient.get<any>('/api/user/getAll', {params});
  }



  updateUser(user: User): Observable<any> {
    return this.httpClient.post<any>('/api/user', user);
  }


}
