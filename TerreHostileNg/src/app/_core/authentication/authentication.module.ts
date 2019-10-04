import { NgModule } from '@angular/core';
import { GameConfigurationService } from 'src/app/_shared/configuration/services/game-configuration.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material';
import { LoginComponent } from './login/login/login.component';
import { AuthenticationService } from './authentication.service';
import { LogoutComponent } from './logout/logout/logout.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core_module';

@NgModule({
  declarations: [
   LoginComponent,
   LogoutComponent
  ],
  imports: [
      FormsModule
  ],
  providers: [
    AuthenticationService
  ]
})
export class AuthenticationModule { }
