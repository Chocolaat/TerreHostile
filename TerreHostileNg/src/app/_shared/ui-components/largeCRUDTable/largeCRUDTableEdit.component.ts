import { Component, OnInit, Optional, Inject, TemplateRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
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
  selector: 'app-admin-management-users-edit',
  template: `
  <h1 mat-dialog-title>Row Action :: <strong>{{action}}</strong></h1>
  <div mat-dialog-content>

  <div *ngIf="action != 'Delete'; else elseTemplate">
    <ng-container *ngComponentOutlet="data.component"></ng-container>
  </div>

    <ng-template #elseTemplate>
      Sure to delete <b>{{local_data.name}}</b>?
    </ng-template>
  </div>

  <div mat-dialog-actions>
    <button mat-button (click)="doAction()">{{action}}</button>
    <button mat-button (click)="closeDialog()" mat-flat-button color="warn">Cancel</button>
  </div>
  `
})
export class LargeCRUDTableEditComponent<Item> implements OnInit {

  action: string;
  local_data: any;

 // @ViewChild(LargeCRUDTableEditDirective, {static: true}) adHost: LargeCRUDTableEditDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    public dialogRef: MatDialogRef<LargeCRUDTableEditComponent<Item>>,

    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: DialogData<Item>) {
        console.log('data');
        console.log(data);
        console.log('data');
      this.local_data = {...data.data};
      this.action = data.actionParam;
  }

  doAction() {
    this.dialogRef.close({event: this.action, data: this.local_data});
    console.log('data');
  }

  closeDialog() {
    this.dialogRef.close({event: 'Cancel', data: this.local_data});
  }



  ngOnInit() {
  }

}

