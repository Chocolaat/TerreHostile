import { MapPlayerComponent } from './modules/game/mapPlayer/mapPlayer.component';
import { MapEditorComponent } from './modules/admin/mapEditor/mapEditor.component';
import { HomeComponent } from './modules/home/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './_core/authentication/login/login/login.component';
import { LogoutComponent } from './_core/authentication/logout/logout/logout.component';
import { AuthGuardService } from './_core/authentication/authGuard.service';
import { AdminManagementComponent } from './modules/admin/management/admin-management.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'mapPlayer', component: MapPlayerComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'mapEditor', component: MapEditorComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'adminManagement', component: AdminManagementComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
