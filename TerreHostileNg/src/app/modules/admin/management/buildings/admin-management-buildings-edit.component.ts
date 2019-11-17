import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Building } from 'src/app/_shared/map/model/building';
import { DialogData } from 'src/app/_shared/ui-components/largeCRUDTable/largeCRUDTableEdit.component';

@Component({
  selector: 'app-admin-management-buildings-edit',
  template: `

<app-large-crud-table-edit
[itemTemplate]="customItemTemplate"
>
</app-large-crud-table-edit>


<ng-template #customItemTemplate let-local_data="local_data">
toto
<mat-form-field>
<input placeholder="{{action}} Id" matInput [(ngModel)]="local_data.buildinId">
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
<input placeholder="{{action}} TownId" matInput [(ngModel)]="local_data.townId">
</mat-form-field>
<mat-form-field>
<input placeholder="{{action}} Health" matInput [(ngModel)]="local_data.health">
</mat-form-field>
<mat-form-field>
<input placeholder="{{action}} State" matInput [(ngModel)]="local_data.state">
</mat-form-field>

</ng-template>


  `
})
export class AdminManagementBuildingsEditComponent {

}

