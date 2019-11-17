import { Component, OnInit, Optional, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from 'src/app/_shared/user/user';
import { DialogData } from 'src/app/_shared/ui-components/largeCRUDTable/largeCRUDTableEdit.component';

@Component({
  selector: 'app-admin-management-users-edit',
  template: `

  <app-large-crud-table-edit
  [itemTemplate]="customItemTemplate"
  >
  </app-large-crud-table-edit>


  <ng-template #customItemTemplate let-local_data="local_data">

      <mat-form-field>
      <input placeholder="{{action}} Id" matInput [(ngModel)]="local_data.userId" [readonly]="true">
    </mat-form-field>
    <mat-form-field>
      <input placeholder="{{action}} Name" matInput [(ngModel)]="local_data.name">
    </mat-form-field>
    <mat-form-field>
      <input placeholder="{{action}} Name" matInput [(ngModel)]="local_data.password">
    </mat-form-field>
    <mat-form-field>
      <input placeholder="{{action}} Email" matInput [(ngModel)]="local_data.email">
    </mat-form-field>
    <mat-form-field>
      <input placeholder="{{action}} StartXCoord" matInput [(ngModel)]="local_data.startXCoord">
    </mat-form-field>
    <mat-form-field>
      <input placeholder="{{action}} StartYCoord" matInput [(ngModel)]="local_data.startYCoord">
    </mat-form-field>

  </ng-template>

  `
})
export class AdminManagementUsersEditComponent {

}

