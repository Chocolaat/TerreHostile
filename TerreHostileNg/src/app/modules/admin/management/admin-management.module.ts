import { SharedModule } from './../../../_shared/shared.module';
import { NgModule } from '@angular/core';
import { GameConfigurationService } from 'src/app/_shared/configuration/services/game-configuration.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material';
import { AdminManagementComponent } from './admin-management.component';
import { AdminManagementUsersComponent } from './users/admin-management-users.component';
import { AdminManagementUsersEditComponent } from './users/admin-management-users-edit.component';
import { AdminManagementBuildingsComponent } from './buildings/admin-management-buildings.component';
import { AdminManagementBuildingsEditComponent } from './buildings/admin-management-buildings-edit.component';
import { LargeCRUDTableComponent } from 'src/app/_shared/ui-components/largeCRUDTable/largeCRUDTable.component';
import { LargeCRUDTableEditComponent } from 'src/app/_shared/ui-components/largeCRUDTable/largeCRUDTableEdit.component';
import { AdminManagementResourcesComponent } from './resources/admin-management-resources.component';
import { AdminManagementResourcesEditComponent } from './resources/admin-management-resources-edit.component';
import { AdminManagementTroopsEditComponent } from './troops/admin-management-troops-edit.component';
import { AdminManagementTroopsComponent } from './troops/admin-management-troops.component';

@NgModule({
  declarations: [
    AdminManagementComponent,
    AdminManagementUsersComponent,
    AdminManagementUsersEditComponent,
    AdminManagementBuildingsComponent,
    AdminManagementBuildingsEditComponent,
    AdminManagementResourcesComponent,
    AdminManagementResourcesEditComponent,
    AdminManagementTroopsComponent,
    AdminManagementTroopsEditComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [
    GameConfigurationService
  ],
  entryComponents: [
    AdminManagementUsersEditComponent,
    AdminManagementBuildingsEditComponent,
    AdminManagementResourcesEditComponent,
    AdminManagementTroopsEditComponent,
    LargeCRUDTableEditComponent
  ]
})
export class AdminManagementModule { }
