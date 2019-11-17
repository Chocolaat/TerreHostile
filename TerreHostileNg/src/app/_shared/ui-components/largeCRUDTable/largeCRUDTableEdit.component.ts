import { Component, OnInit, Optional, Inject, TemplateRef, ViewChild, ComponentFactoryResolver, Input, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from 'src/app/_shared/user/user';
import { AdminManagementBuildingsComponent } from 'src/app/modules/admin/management/buildings/admin-management-buildings.component';
import { AdminManagementBuildingsEditComponent } from 'src/app/modules/admin/management/buildings/admin-management-buildings-edit.component';

export class DialogData<Item> {
  data: Item;
  actionParam: string;
  template: TemplateRef<any>;
}


// TODO : pass local_data to template

@Component({
  selector: 'app-large-crud-table-edit',
  template: `
  <h1 mat-dialog-title>Row Action :: <strong>{{action}}</strong></h1>
  <div mat-dialog-content>

  <div *ngIf="action != 'Delete'; else elseTemplate">
    <ng-container
    [ngTemplateOutlet]="itemTemplate"
    [ngTemplateOutletContext]="{ local_data: local_data }"
    ></ng-container>
  </div>

    <ng-template #elseTemplate>
      Sure to delete <b>{{local_data.name}}</b>?
    </ng-template>
  </div>

  <div mat-dialog-actions>
    <button mat-button (click)="doAction()">{{action}}</button>
    <button mat-button (click)="closeDialog()" mat-flat-button color="warn">Cancel</button>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LargeCRUDTableEditComponent<Item> {

  @Input() itemTemplate: TemplateRef<HTMLElement>;

  action: string;
  local_data: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    public dialogRef: MatDialogRef<LargeCRUDTableEditComponent<Item>>,

    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public dataReceived: DialogData<Item>) {
      this.local_data = {...dataReceived.data};
      this.action = dataReceived.actionParam;
  }

  doAction() {
    this.dialogRef.close({event: this.action, data: this.local_data});
  }

  closeDialog() {
    this.dialogRef.close({event: 'Cancel', data: this.local_data});
  }

}

