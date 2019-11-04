import { MapPlayerModule } from './modules/game/mapPlayer/mapPlayer.module';
import { MapEditorModule } from './modules/admin/mapEditor/mapEditor.module';
import { HomeModule } from './modules/home/home.module';
import { NgModule } from '@angular/core';
import { WindowRef } from './_core/window.service';
import { AppComponent } from './app.component';
import { SharedModule } from './_shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './_core/authentication/login/login/login.component';
import { CoreModule } from './_core/core_module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthHtppInterceptorService } from './_core/authentication/basic-auth-interceptor.service';
import { AdminManagementComponent } from './modules/admin/management/admin-management.component';
import { AdminManagementModule } from './modules/admin/management/admin-management.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    HomeModule,
    MapPlayerModule,
    MapEditorModule,
    AdminManagementModule,
    BrowserAnimationsModule,
    CoreModule
  ],
  providers: [ WindowRef,
    {
      provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
