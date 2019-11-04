import { SharedModule } from './../../../_shared/shared.module';
import { NgModule } from '@angular/core';
import { GameConfigurationService } from 'src/app/_shared/configuration/services/game-configuration.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material';
import { AdminManagementComponent } from './admin-management.component';
import { AdminManagementUsersComponent } from './users/admin-management-users.component';

@NgModule({
  declarations: [
    AdminManagementComponent,
    AdminManagementUsersComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [
    GameConfigurationService
  ]
})
export class AdminManagementModule { }
