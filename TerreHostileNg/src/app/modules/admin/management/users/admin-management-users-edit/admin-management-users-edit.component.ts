import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from 'src/app/_shared/user/user';

@Component({
  selector: 'app-admin-management-users-edit',
  template: `
  <h1 mat-dialog-title>Row Action :: <strong>{{action}}</strong></h1>
  <div mat-dialog-content>
    <mat-form-field *ngIf="action != 'Delete'; else elseTemplate">
      <input placeholder="{{action}} Name" matInput [(ngModel)]="local_data.name">
    </mat-form-field>
    <ng-template #elseTemplate>
      Sure to delete <b>{{local_data.name}}</b>?
    </ng-template>
  </div>
  <div mat-dialog-actions>
    <button mat-button (click)="doAction()">{{action}}</button>
    <button mat-button (click)="closeDialog()" mat-flat-button color="warn">Cancel</button>
  </div>
  `,
  styleUrls: ['./admin-management-users-edit.component.css']
})
export class AdminManagementUsersEditComponent implements OnInit {

  action: string;
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<AdminManagementUsersEditComponent>,

    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: User) {
    this.local_data = {...data};
    this.action = this.local_data.action;
  }

  doAction() {
    this.dialogRef.close({event: 'Delete', data: this.local_data});
  }

  closeDialog() {
    this.dialogRef.close({event: 'Cancel', data: this.local_data});
  }



  ngOnInit() {
  }

}

