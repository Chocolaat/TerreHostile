import { MapPlayerComponent } from './modules/game/mapPlayer/mapPlayer.component';
import { MapEditorComponent } from './modules/admin/mapEditor/mapEditor.component';
import { HomeComponent } from './modules/home/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'mapPlayer', component: MapPlayerComponent
  },
  {
    path: 'mapEditor', component: MapEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
