
import { GameConfigurationService } from './configuration/services/game-configuration.service';
import { CoreModule } from 'src/app/_core/core_module';
import { MapViewComponent } from './map/map-view/map-view.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MapService } from './map/services/map.service';
import { MapModule } from './map/map.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatFormFieldModule, MatDialogModule} from '@angular/material';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterSortPaginateParams } from './ui-components/grids/model/filterSortPaginateParams';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  exports: [
    MapModule,
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule { }
