import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from 'src/app/_shared/user/user';
import { DialogData } from 'src/app/_shared/ui-components/largeCRUDTable/largeCRUDTableEdit.component';

@Component({
  selector: 'app-admin-management-buildings-edit',
  template: `
  <mat-form-field>
  <input placeholder="{{action}} Id" matInput [(ngModel)]="local_data.userId">
</mat-form-field>
<mat-form-field>
  <input placeholder="{{action}} Name" matInput [(ngModel)]="local_data.name">
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
  `
})
export class AdminManagementUsersEditComponent implements OnInit {

  action: string;
  local_data: User;

  constructor(
    public dialogRef: MatDialogRef<AdminManagementUsersEditComponent>,

    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: DialogData<User>) {
    this.local_data = {...data.data};
    this.action = data.actionParam;
  }

  doAction() {
    console.log('this.local_data');
    console.log(this.local_data);
    console.log('this.local_data');
    this.dialogRef.close({event: this.action, data: this.local_data});
  }

  closeDialog() {
    this.dialogRef.close({event: 'Cancel', data: this.local_data});
  }



  ngOnInit() {
  }

}

