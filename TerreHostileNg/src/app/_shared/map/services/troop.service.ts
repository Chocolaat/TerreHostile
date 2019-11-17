import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LargeCRUDTableService } from '../../ui-components/largeCRUDTable/largeCRUDTable.service';
import { FilterSortPaginateParams } from '../../ui-components/grids/model/filterSortPaginateParams';
import { User } from '../../user/user';
import { GridPaginationResponse } from '../../ui-components/grids/model/gridPaginationResponse';
import { Building } from '../model/building';
import { Troop } from '../model/troop';

@Injectable()
export class TroopService extends LargeCRUDTableService<Troop> {


  constructor(private  httpClient: HttpClient) {
      super();
  }


    getById(id: number): Observable<Troop> {
    const params = '?id=' + id;
    return this.httpClient.get<Troop>('/api/troop' + params);
  }

  getPaginated(filterSortPaginateParams: FilterSortPaginateParams): Observable<GridPaginationResponse<Troop>> {

    const params = new HttpParams()
    .set('pageNumber', filterSortPaginateParams.pageNumber.toString())
    .set('pageSize', filterSortPaginateParams.pageSize.toString())
    .set('filter', filterSortPaginateParams.filter)
    .set('sortName', filterSortPaginateParams.sortName)
    .set('sortOrder', filterSortPaginateParams.sortOrder);
    return this.httpClient.get<any>('/api/troop/getPaginated', {params});
  }

  createItem(troop: Troop) {
    return this.httpClient.post<Troop>('/api/troop/create', troop);
  }
  updateItem(troop: Troop) {
    return this.httpClient.post<Troop>('/api/troop', troop);
  }
  deleteItem(troop: Troop) {
    return this.httpClient.post<Troop>('/api/troop/delete', troop);
  }




}
