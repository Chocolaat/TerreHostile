import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { FilterSortPaginateParams } from '../grids/model/filterSortPaginateParams';
import { GridPaginationResponse } from '../grids/model/gridPaginationResponse';

@Injectable()
export abstract class LargeCRUDTableService<T> {

    abstract getById(id: number): Observable<T> ;

    abstract createItem(item: T);

    abstract updateItem(item: T);

    abstract deleteItem(item: T);

    abstract getPaginated(filterSortPaginateParams: FilterSortPaginateParams): Observable<GridPaginationResponse<T>>;


}
