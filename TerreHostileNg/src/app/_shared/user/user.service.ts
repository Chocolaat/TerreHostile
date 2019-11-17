import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './user';
import { map } from 'rxjs/operators';
import { FilterSortPaginateParams } from '../ui-components/grids/model/filterSortPaginateParams';
import { GridPaginationResponse } from '../ui-components/grids/model/gridPaginationResponse';
import { LargeCRUDTableService } from '../ui-components/largeCRUDTable/largeCRUDTable.service';

@Injectable()
export class UserService extends LargeCRUDTableService<User> {

  constructor(private  httpClient: HttpClient) {
    super();
   }


  getById(id: number): Observable<User> {
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



  createItem(item: User) {
    return this.httpClient.post<any>('/api/user/create', item);
  }
  updateItem(item: User) {
    return this.httpClient.post<any>('/api/user', item);
  }
  deleteItem(item: User) {
    return this.httpClient.post<any>('/api/user/delete', item);
  }




}
