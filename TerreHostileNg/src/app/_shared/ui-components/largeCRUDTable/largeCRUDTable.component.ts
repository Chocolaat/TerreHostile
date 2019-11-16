import {HttpClient} from '@angular/common/http';
import {Component, ViewChild, AfterViewInit, OnInit, TemplateRef, Type, Input} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { FilterSortPaginateParams } from 'src/app/_shared/ui-components/grids/model/filterSortPaginateParams';
import { MatDialog } from '@angular/material';
import { GridPaginationResponse } from 'src/app/_shared/ui-components/grids/model/gridPaginationResponse';
import { LargeCRUDTableService } from './largeCRUDTable.service';
import { LargeCRUDTableEditComponent } from './largeCRUDTableEdit.component';

/**
 * @title Table retrieving data through HTTP
 */
@Component({
  selector: 'app-large-crud-table',
  template: `

  `
})
export abstract class LargeCRUDTableComponent<Item> implements AfterViewInit, OnInit {




  itemList: Array<Item> = [];

  resultsLength = 0;
  isLoadingResults = true;

  displayedColumns: string[];

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private _httpClient: HttpClient, private itemService: LargeCRUDTableService<Item>, public dialog: MatDialog) {}

ngOnInit() {
    this.displayedColumns = this.getDisplayedColumns();
    this.displayedColumns.push('action');
}

abstract getDisplayedColumns(): string[];
abstract getEditComponent(): Type<any>;

  ngAfterViewInit() {
   // this.exampleDatabase = new ExampleHttpDatabase(this._httpClient);

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          return this.loadItems();
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.resultsLength = data.itemsCount;

          return data;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          return observableOf(new GridPaginationResponse<Item>());
        })
      ).subscribe(data => {
        this.itemList = data.itemList;
      });
  }
  onRowClicked(row) {
    console.log('Row clicked: ', row);
}


refresh() {
  console.log('refresh');
  this.loadItems().subscribe(data => {
    this.itemList = data.itemList;
    this.isLoadingResults = false;
  });
}

loadItems() {
  this.isLoadingResults = true;
  const filterSortPaginateParams: FilterSortPaginateParams = new FilterSortPaginateParams();
  filterSortPaginateParams.pageNumber = this.paginator.pageIndex;
  filterSortPaginateParams.pageSize = this.paginator.pageSize;
  filterSortPaginateParams.sortName = this.sort.active;
  filterSortPaginateParams.sortOrder = this.sort.direction;
  filterSortPaginateParams.filter = '';

  return this.itemService.getPaginated(filterSortPaginateParams);
}

 openDialog(action: string, obj: Item) {
  console.log(action);
  console.log(obj);
  const dialogRef = this.dialog.open(LargeCRUDTableEditComponent, {
    width: '250px',
    data: {
      data: obj,
      actionParam: action,
      component: this.getEditComponent()
    },
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      console.log('result');
      if (result.event === 'Add') {
        this.addRowData(result.data);
      } else if (result.event === 'Update') {
        this.updateRowData(result.data);
      } else if (result.event === 'Delete') {
        this.deleteRowData(result.data);
      }
    }
  });

}


   addRowData(item: Item) {
    this.itemService.createItem(item).subscribe(() => this.refresh());
  }

  updateRowData (item: Item) {
    this.itemService.updateItem(item).subscribe(() => {
    this.refresh();
  });}

  deleteRowData (item: Item) {
    this.itemService.deleteItem(item).subscribe(() => this.refresh());
  }
}

