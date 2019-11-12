import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './user';
import { map } from 'rxjs/operators';
import { FilterSortPaginateParams } from '../ui-components/grids/model/filterSortPaginateParams';
import { GridPaginationResponse } from '../ui-components/grids/model/gridPaginationResponse';

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

  getPaginated(filterSortPaginateParams: FilterSortPaginateParams): Observable<GridPaginationResponse<User>> {

    const params = new HttpParams()
    .set('pageNumber', filterSortPaginateParams.pageNumber.toString())
    .set('pageSize', filterSortPaginateParams.pageSize.toString())
    .set('filter', filterSortPaginateParams.filter)
    .set('sortName', filterSortPaginateParams.sortName)
    .set('sortOrder', filterSortPaginateParams.sortOrder);
    return this.httpClient.get<any>('/api/user/getPaginated', {params});
  }



  updateUser(user: User): Observable<any> {
    return this.httpClient.post<any>('/api/user', user);
  }

  createUser(user: User): Observable<any> {
    return this.httpClient.post<any>('/api/user/create', user);
  }

  deleteUser(user: User): Observable<any> {    console.log('user');
    return this.httpClient.post<any>('/api/user/delete', user);
  }



}
