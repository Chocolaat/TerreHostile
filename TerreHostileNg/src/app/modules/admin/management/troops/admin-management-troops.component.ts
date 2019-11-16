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
import { AdminManagementUsersEditComponent } from '../users/admin-management-users-edit.component';
import { ComponentType } from '@angular/cdk/portal';
import { Type } from '@angular/core';
import { TroopService } from 'src/app/_shared/map/services/troop.service';
import { AdminManagementTroopsEditComponent } from './admin-management-troops-edit.component';
import { Troop } from 'src/app/_shared/map/model/troop';

/**
 * @title Table retrieving data through HTTP
 */
@Component({
  selector: 'app-admin-management-troops',
  template: `
  <app-large-crud-table-content
  (refresh)="this.refresh($event)"
  (openDialog)="this.openDialog($event)"
  >

    <mat-table [dataSource]="itemList" class="mat-elevation-z8" #userTable matSort matSortActive="troopId" matSortDirection="asc" class="myTable">


    <!-- ID Column -->
    <ng-container matColumnDef="troopId">
      <mat-header-cell *matHeaderCellDef mat-sort-header> Id </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.troopId}} </mat-cell>
    </ng-container>

    <!-- xCoord Column -->
    <ng-container matColumnDef="xCoord">
      <mat-header-cell *matHeaderCellDef> xCoord </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.xCoord}} </mat-cell>
    </ng-container>

    <!-- yCoord Column -->
    <ng-container matColumnDef="yCoord">
      <mat-header-cell *matHeaderCellDef> yCoord </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.yCoord}} </mat-cell>
    </ng-container>

    <!-- type Column -->
    <ng-container matColumnDef="userId">
      <mat-header-cell *matHeaderCellDef> User </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.userId}} </mat-cell>
    </ng-container>

    <!-- town Column -->
    <ng-container matColumnDef="townId">
      <mat-header-cell *matHeaderCellDef> Town </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.townId}} </mat-cell>
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
    { provide: LargeCRUDTableService, useClass: TroopService }
  ]
})


// TODO : get local_data from outer template

export class AdminManagementTroopsComponent extends LargeCRUDTableComponent<Troop>   {

   getEditComponent(): Type<any> {
    return AdminManagementTroopsEditComponent;
  }

    getDisplayedColumns(): string[] {
       // return ['buildingId', 'type', 'xCoord', 'yCoord'];
       return ['troopId', 'xCoord', 'yCoord', 'userId', 'townId'];
    }
}
