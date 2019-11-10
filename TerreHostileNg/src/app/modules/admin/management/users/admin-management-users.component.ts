import { Component, OnInit, HostListener, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from 'src/app/_shared/user/user.service';
import { User } from 'src/app/_shared/user/user';
import { MatSnackBar, MatDialog, MatTable, MatPaginator, MatSort } from '@angular/material';
import { AdminManagementUsersEditComponent } from './admin-management-users-edit/admin-management-users-edit.component';
import { AdminManagementUsersDataSource } from './admin-management-users.datasource';
import { FilterSortPaginateParams } from 'src/app/_shared/ui-components/grids/model/filterSortPaginateParams';
import { tap } from 'rxjs/operators';
import { merge } from 'rxjs';


@Component({
  selector: 'app-admin-management-users',
  template: `
    Users



    <button mat-button (click)="openDialog('Add',{})" mat-flat-button color="primary">Add Row</button>


    <div class="userTab">

    <div class="spinner-container" *ngIf="dataSource.loading$ | async">
        <mat-spinner></mat-spinner>
    </div>


    <mat-table [dataSource]="dataSource" class="mat-elevation-z8" #userTable matSort matSortActive="name" matSortDirection="asc">
    <!-- Position Column -->


    <!-- Position Column -->
    <ng-container matColumnDef="name">
      <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.name}} </mat-cell>
    </ng-container>


    <!-- Name Column -->
    <ng-container matColumnDef="email">
      <mat-header-cell *matHeaderCellDef> Email </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.email}} </mat-cell>
    </ng-container>

    <!-- Weight Column -->
    <ng-container matColumnDef="startXCoord">
      <mat-header-cell *matHeaderCellDef> startXCoord </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.startXCoord}} </mat-cell>
    </ng-container>

    <!-- Symbol Column -->
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



    <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
    <mat-row *matRowDef="let row; columns: displayedColumns" (click)="onRowClicked(row)"></mat-row>
  </mat-table>

  <mat-paginator [length]="10" [pageSize]="3"
  [pageSizeOptions]="[3, 5, 10]"></mat-paginator>

    </div>




  `,
  styleUrls: ['./admin-management-users.component.css']
})
export class AdminManagementUsersComponent implements OnInit, AfterViewInit {
    displayedColumns: string[] = ['name', 'email', 'startXCoord', 'startYCoord', 'action'];
  //  private userList: Array<User> = [];

    dataSource: AdminManagementUsersDataSource;


    @ViewChild(MatPaginator, {static: false})
    paginator: MatPaginator;


    @ViewChild(MatSort, {static: false})
    sort: MatSort;


  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngAfterViewInit() {


                // reset the paginator after sorting
                this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

                merge(this.sort.sortChange, this.paginator.page)
                    .pipe(
                        tap(() => this.loadUser())
                    )
                    .subscribe();
}

loadUser() {
  const filterSortPaginateParams = new FilterSortPaginateParams();
  filterSortPaginateParams.filter = '';
  filterSortPaginateParams.sortOrder = this.sort.direction;
  filterSortPaginateParams.pageNumber = this.paginator.pageIndex;
  filterSortPaginateParams.pageSize = this.paginator.pageSize;

    this.dataSource.loadUsers(filterSortPaginateParams);
}

  ngOnInit() {
    this.dataSource = new AdminManagementUsersDataSource(this.userService);
    const params: FilterSortPaginateParams = new FilterSortPaginateParams();
    this.dataSource.loadUsers(params);

/*     this.userList.push({name: 'hey', email: 'hoy', id: 45, startXCoord:240, startYCoord: 456}); */
/*     this.userList.push({name: 'hey', email: 'hoy', id: 45, startXCoord:240, startYCoord: 456}); */
/*      this.userService.getAll().subscribe((userListResult) => {
        this.userList = userListResult;
    }); */
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
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
    //      this.addRowData(result.data);
        } else if (result.event === 'Update') {
    //      this.updateRowData(result.data);
        } else if (result.event === 'Delete') {
    //      this.deleteRowData(result.data);
        }
      }
    });
  }


/*   addRowData(user: User) {
    this.userList.push(user);
    this.table.renderRows();
  }

  updateRowData (user: User) {
    this.userList = this.userList.filter((value, key) => {
      if (value.name === user.name) {
        value.email = user.email;
        value.startXCoord = user.startXCoord;
        value.startYCoord = user.startYCoord;
      }
      return true;
    });
  }
  deleteRowData (user: User) {
    this.userList = this.userList.filter((value, key) => {
      return value.name !== user.name;
    });
  } */


}
