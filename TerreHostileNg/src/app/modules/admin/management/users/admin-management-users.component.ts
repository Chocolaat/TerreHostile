import {HttpClient} from '@angular/common/http';
import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { User } from 'src/app/_shared/user/user';
import { UserService } from 'src/app/_shared/user/user.service';
import { FilterSortPaginateParams } from 'src/app/_shared/ui-components/grids/model/filterSortPaginateParams';
import { MatDialog } from '@angular/material';
import { AdminManagementUsersEditComponent } from './admin-management-users-edit/admin-management-users-edit.component';
import { GridPaginationResponse } from 'src/app/_shared/ui-components/grids/model/gridPaginationResponse';

/**
 * @title Table retrieving data through HTTP
 */
@Component({
  selector: 'app-admin-management-users',
  template: `


  <div class="tableHeader">
  Users
  <button mat-button (click)="openDialog('Add',{})" mat-flat-button color="primary">Add Row</button>
  <button mat-button (click)="refresh()" mat-flat-button color="primary">Refresh</button>
  </div>



    <div class="example-container mat-elevation-z8">
    <div class="example-loading-shade"
         *ngIf="isLoadingResults || isRateLimitReached">
      <mat-spinner *ngIf="isLoadingResults"></mat-spinner>
      <div class="example-rate-limit-reached" *ngIf="isRateLimitReached">
        GitHub's API rate limit has been reached. It will be reset in one minute.
      </div>
    </div>

    <div class="example-table-container">


       <mat-table [dataSource]="userList" class="mat-elevation-z8" #userTable matSort matSortActive="name" matSortDirection="asc" class="myTable">


             <!-- name Column -->
             <ng-container matColumnDef="name">
               <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>
               <mat-cell *matCellDef="let element"> {{element.name}} </mat-cell>
             </ng-container>


             <!-- email Column -->
             <ng-container matColumnDef="email">
               <mat-header-cell *matHeaderCellDef> Email </mat-header-cell>
               <mat-cell *matCellDef="let element"> {{element.email}} </mat-cell>
             </ng-container>

             <!-- startXCoord Column -->
             <ng-container matColumnDef="startXCoord">
               <mat-header-cell *matHeaderCellDef> startXCoord </mat-header-cell>
               <mat-cell *matCellDef="let element"> {{element.startXCoord}} </mat-cell>
             </ng-container>

             <!-- startYCoord Column -->
             <ng-container matColumnDef="startYCoord">
               <mat-header-cell *matHeaderCellDef> startYCoord </mat-header-cell>
               <mat-cell *matCellDef="let element"> {{element.startYCoord}} </mat-cell>
             </ng-container>

             <!-- Action Column -->
             <ng-container matColumnDef="action">
               <th mat-header-cell *matHeaderCellDef> Action </th>
               <td mat-cell *matCellDef="let element" class="action-link">
                 <a (click)="openDialog('Update', element)">Edit</a> |
                 <a (click)="openDialog('Delete', element)">Delete</a>
               </td>
             </ng-container>


        <mat-header-row *matHeaderRowDef="displayedColumns ; sticky: true"></mat-header-row>
        <mat-row *matRowDef="let row; columns: displayedColumns" (click)="onRowClicked(row)" class="my-mat-row"></mat-row>

      </mat-table>
    </div>

    <mat-paginator [length]="resultsLength" [pageSize]="15"></mat-paginator>
  </div>





  `,
  styleUrls: ['./admin-management-users.component.css']
})
export class AdminManagementUsersComponent implements AfterViewInit {

  displayedColumns: string[] = ['name', 'email', 'startXCoord', 'startYCoord', 'action'];
 // exampleDatabase: ExampleHttpDatabase | null;
  userList: Array<User> = [];
 // dataSource: AdminManagementUsersDataSource;

  resultsLength = 0;
  isLoadingResults = true;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private _httpClient: HttpClient, private userService: UserService, public dialog: MatDialog) {}

  ngAfterViewInit() {
   // this.exampleDatabase = new ExampleHttpDatabase(this._httpClient);

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          return this.loadUsers();
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.resultsLength = data.itemsCount;

          return data;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          return observableOf(new GridPaginationResponse<User>());
        })
      ).subscribe(data => {
        this.userList = data.itemList;
      });
  }
  onRowClicked(row) {
    console.log('Row clicked: ', row);
}


refresh() {
  this.loadUsers().subscribe(data => {
    this.userList = data.itemList;
    this.isLoadingResults = false;
  });
}

loadUsers() {
  this.isLoadingResults = true;
  const filterSortPaginateParams: FilterSortPaginateParams = new FilterSortPaginateParams();
  filterSortPaginateParams.pageNumber = this.paginator.pageIndex;
  filterSortPaginateParams.pageSize = this.paginator.pageSize;
  filterSortPaginateParams.sortName = this.sort.active;
  filterSortPaginateParams.sortOrder = this.sort.direction;
  filterSortPaginateParams.filter = '';

  return this.userService.getPaginated(filterSortPaginateParams);
}

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(AdminManagementUsersEditComponent, {
      width: '250px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
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


   addRowData(user: User) {
    this.userService.createUser(user).subscribe(() => this.refresh());
  }

  updateRowData (user: User) {
    this.userService.updateUser(user).subscribe(() => this.refresh());
    }

  deleteRowData (user: User) {
    this.userService.deleteUser(user).subscribe(() => this.refresh());
  }
}

