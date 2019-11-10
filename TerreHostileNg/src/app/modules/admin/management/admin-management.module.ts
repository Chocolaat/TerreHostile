import { SharedModule } from './../../../_shared/shared.module';
import { NgModule } from '@angular/core';
import { GameConfigurationService } from 'src/app/_shared/configuration/services/game-configuration.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material';
import { AdminManagementComponent } from './admin-management.component';
import { AdminManagementUsersComponent } from './users/admin-management-users.component';
import { AdminManagementUsersEditComponent } from './users/admin-management-users-edit/admin-management-users-edit.component';

@NgModule({
  declarations: [
    AdminManagementComponent,
    AdminManagementUsersComponent,
    AdminManagementUsersEditComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [
    GameConfigurationService
  ],
  entryComponents: [
    AdminManagementUsersEditComponent
  ]
})
export class AdminManagementModule { }
