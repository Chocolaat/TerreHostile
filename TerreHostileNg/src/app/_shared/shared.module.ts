
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
import { AdminManagementBuildingsEditComponent } from '../modules/admin/management/buildings/admin-management-buildings-edit.component';
import { LargeCRUDTableEditComponent } from './ui-components/largeCRUDTable/largeCRUDTableEdit.component';
import { LargeCRUDTableService } from './ui-components/largeCRUDTable/largeCRUDTable.service';
import { LargeCRUDTableContentComponent } from './ui-components/largeCRUDTable/largeCRUDTableContent.component';
import { LargeCRUDTableComponent } from './ui-components/largeCRUDTable/largeCRUDTable.component';

@NgModule({
  declarations: [
    LargeCRUDTableEditComponent,
    LargeCRUDTableContentComponent

  ],
  imports: [
    CoreModule,
    BrowserAnimationsModule
  ],
  exports: [
    MapModule,
    CoreModule,
    LargeCRUDTableEditComponent,
    LargeCRUDTableContentComponent
  ]
})
export class SharedModule { }
