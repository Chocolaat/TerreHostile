import {HttpClient} from '@angular/common/http';
import {Component, ViewChild, AfterViewInit, TemplateRef} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { User } from 'src/app/_shared/user/user';
import { UserService } from 'src/app/_shared/user/user.service';
import { FilterSortPaginateParams } from 'src/app/_shared/ui-components/grids/model/filterSortPaginateParams';
import { MatDialog } from '@angular/material';
import { GridPaginationResponse } from 'src/app/_shared/ui-components/grids/model/gridPaginationResponse';
import { LargeCRUDTableComponent } from 'src/app/_shared/ui-components/largeCRUDTable/largeCRUDTable.component';
import { Building } from 'src/app/_shared/map/model/building';
import { LargeCRUDTableService } from 'src/app/_shared/ui-components/largeCRUDTable/largeCRUDTable.service';
import { BuildingService } from 'src/app/_shared/map/services/buildings.service';
import { ComponentType } from '@angular/cdk/portal';
import { Type } from '@angular/core';
import { AdminManagementUsersEditComponent } from './admin-management-users-edit.component';

/**
 * @title Table retrieving data through HTTP
 */
@Component({
  selector: 'app-admin-management-users',
  template: `
  <app-large-crud-table-content
  (refresh)="this.refresh($event)"
  (openDialog)="this.openDialog($event)"
  >

    <mat-table [dataSource]="itemList" class="mat-elevation-z8" #userTable matSort matSortActive="userId" matSortDirection="asc" class="myTable">

    <!-- id Column -->
    <ng-container matColumnDef="id">
      <mat-header-cell *matHeaderCellDef mat-sort-header> Id </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.userId}} </mat-cell>
    </ng-container>


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



<div>

<mat-paginator [length]="resultsLength" [pageSize]="15"></mat-paginator>

</div>

</app-large-crud-table-content>

  `,
  providers: [
    { provide: LargeCRUDTableService, useClass: UserService }
  ]
})


// TODO : get local_data from outer template

export class AdminManagementUsersComponent extends LargeCRUDTableComponent<User>   {


   getEditComponent(): Type<any> {
    return AdminManagementUsersEditComponent;
  }

    getDisplayedColumns(): string[] {
       // return ['buildingId', 'type', 'xCoord', 'yCoord'];
       return ['id', 'name', 'email', 'startXCoord', 'startYCoord'];
    }
}
