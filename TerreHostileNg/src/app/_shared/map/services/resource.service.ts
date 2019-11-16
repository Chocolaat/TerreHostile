import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LargeCRUDTableService } from '../../ui-components/largeCRUDTable/largeCRUDTable.service';
import { FilterSortPaginateParams } from '../../ui-components/grids/model/filterSortPaginateParams';
import { User } from '../../user/user';
import { GridPaginationResponse } from '../../ui-components/grids/model/gridPaginationResponse';
import { Building } from '../model/building';
import { Resource } from '../model/resource';

@Injectable()
export class ResourceService extends LargeCRUDTableService<Resource> {


  constructor(private  httpClient: HttpClient) {
      super();
  }

    createItem(resource: Resource) {
      return this.httpClient.post<Resource>('/api/resource', resource);
    }
    updateItem(resource: Resource) {
      return this.httpClient.post<Resource>('/api/resource/create', resource);
    }
    deleteItem(resource: Resource) {
      return this.httpClient.post<Resource>('/api/resource/delete', resource);
    }


    getById(id: number): Observable<Resource> {
    const params = '?id=' + id;
    return this.httpClient.get<Resource>('/api/resource' + params);
  }

  getPaginated(filterSortPaginateParams: FilterSortPaginateParams): Observable<GridPaginationResponse<Resource>> {

    const params = new HttpParams()
    .set('pageNumber', filterSortPaginateParams.pageNumber.toString())
    .set('pageSize', filterSortPaginateParams.pageSize.toString())
    .set('filter', filterSortPaginateParams.filter)
    .set('sortName', filterSortPaginateParams.sortName)
    .set('sortOrder', filterSortPaginateParams.sortOrder);
    return this.httpClient.get<any>('/api/resource/getPaginated', {params});
  }




}
