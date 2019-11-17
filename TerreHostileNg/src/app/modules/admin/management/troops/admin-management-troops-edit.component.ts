import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Building } from 'src/app/_shared/map/model/building';
import { DialogData } from 'src/app/_shared/ui-components/largeCRUDTable/largeCRUDTableEdit.component';
import { Troop } from 'src/app/_shared/map/model/troop';

@Component({
  selector: 'app-admin-management-troops-edit',
  template: `

<app-large-crud-table-edit
[itemTemplate]="customItemTemplate"
>
</app-large-crud-table-edit>


<ng-template #customItemTemplate let-local_data="local_data">

<mat-form-field>
<input placeholder="{{action}} Id" matInput [(ngModel)]="local_data.troopId">
</mat-form-field>
<mat-form-field>
<input placeholder="{{action}} x Coord" matInput [(ngModel)]="local_data.xCoord">
</mat-form-field>
<mat-form-field>
<input placeholder="{{action}} y Coord" matInput [(ngModel)]="local_data.yCoord">
</mat-form-field>
<mat-form-field>
<input placeholder="{{action}} UserId" matInput [(ngModel)]="local_data.userId">
</mat-form-field>
<mat-form-field>
<input placeholder="{{action}} TownId" matInput [(ngModel)]="local_data.townId">
</mat-form-field>

</ng-template>
  `
})
export class AdminManagementTroopsEditComponent implements OnInit {

  action: string;
  local_data: Troop;

  constructor(
    public dialogRef: MatDialogRef<AdminManagementTroopsEditComponent>,

    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: DialogData<Troop>) {
    this.local_data = {...data.data};
    this.action = data.actionParam;
  }

  doAction() {
    this.dialogRef.close({event: this.action, data: this.local_data});
  }

  closeDialog() {
    this.dialogRef.close({event: 'Cancel', data: this.local_data});
  }



  ngOnInit() {
  }

}

