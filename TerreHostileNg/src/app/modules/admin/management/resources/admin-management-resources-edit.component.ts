import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Building } from 'src/app/_shared/map/model/building';
import { DialogData } from 'src/app/_shared/ui-components/largeCRUDTable/largeCRUDTableEdit.component';
import { Resource } from 'src/app/_shared/map/model/resource';

@Component({
  selector: 'app-admin-management-resources-edit',
  template: `

<app-large-crud-table-edit
[itemTemplate]="customItemTemplate"
>
</app-large-crud-table-edit>


<ng-template #customItemTemplate let-local_data="local_data">

<mat-form-field>
<input placeholder="{{action}} Id" matInput [(ngModel)]="local_data.resourceId">
</mat-form-field>
<mat-form-field>
<input placeholder="{{action}} x Coord" matInput [(ngModel)]="local_data.xCoord">
</mat-form-field>
<mat-form-field>
<input placeholder="{{action}} y Coord" matInput [(ngModel)]="local_data.yCoord">
</mat-form-field>
<mat-form-field>
<input placeholder="{{action}} Type" matInput [(ngModel)]="local_data.type">
</mat-form-field>
<mat-form-field>
<input placeholder="{{action}} Quantity" matInput [(ngModel)]="local_data.quantity">
</mat-form-field>

</ng-template>
  `
})
export class AdminManagementResourcesEditComponent implements OnInit {

  action: string;
  local_data: Resource;

  constructor(
    public dialogRef: MatDialogRef<AdminManagementResourcesEditComponent>,

    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: DialogData<Resource>) {
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

