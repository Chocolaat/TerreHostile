import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LargeCRUDTableService } from '../../ui-components/largeCRUDTable/largeCRUDTable.service';
import { FilterSortPaginateParams } from '../../ui-components/grids/model/filterSortPaginateParams';
import { User } from '../../user/user';
import { GridPaginationResponse } from '../../ui-components/grids/model/gridPaginationResponse';
import { Building } from '../model/building';

@Injectable()
export class BuildingService extends LargeCRUDTableService<Building> {


  constructor(private  httpClient: HttpClient) {
      super();
  }


    getById(id: number): Observable<Building> {
    const params = '?id=' + id;
    return this.httpClient.get<Building>('/api/building' + params);
  }

  getPaginated(filterSortPaginateParams: FilterSortPaginateParams): Observable<GridPaginationResponse<Building>> {

    const params = new HttpParams()
    .set('pageNumber', filterSortPaginateParams.pageNumber.toString())
    .set('pageSize', filterSortPaginateParams.pageSize.toString())
    .set('filter', filterSortPaginateParams.filter)
    .set('sortName', filterSortPaginateParams.sortName)
    .set('sortOrder', filterSortPaginateParams.sortOrder);
    return this.httpClient.get<any>('/api/building/getPaginated', {params});
  }


  createItem(building: Building) {
    return this.httpClient.post<Building>('/api/building/create', building);
  }
  updateItem(building: Building) {
    return this.httpClient.post<Building>('/api/building', building);
  }
  deleteItem(building: Building) {
    return this.httpClient.post<Building>('/api/building/delete', building);
  }



}
