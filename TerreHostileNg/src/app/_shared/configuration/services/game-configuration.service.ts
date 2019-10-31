import { GroundConfiguration } from './../model/groundConfiguration';
import { UnitConfiguration } from './../model/unitConfiguration';
import { BuildingConfiguration } from './../model/buildingConfiguration';

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ResourceConfiguration } from '../model/resourceConfiguration';

@Injectable()
export class GameConfigurationService {

  // buildingConfiguration: Map<number, BuildingConfiguration> = new Map<number, BuildingConfiguration>();
  buildingConfiguration: Observable<Array<BuildingConfiguration>>;
  resourceConfiguration: Observable<Array<ResourceConfiguration>>;
  unitConfiguration: Observable<Array<UnitConfiguration>>;
  groundConfiguration: Observable<Array<GroundConfiguration>>;

  constructor(private  httpClient: HttpClient) { }

  getBuildingConfiguration(): Observable<Array<BuildingConfiguration>> {
    if (!this.buildingConfiguration) {
      this.buildingConfiguration = this.httpClient.get<any>('/api/gameConfigurations/building');
    }
    return this.buildingConfiguration;
  }

  getResourceConfiguration(): Observable<Array<ResourceConfiguration>> {
    if (!this.resourceConfiguration) {
      this.resourceConfiguration = this.httpClient.get<any>('/api/gameConfigurations/resource');
    }
    return this.resourceConfiguration;
  }

  getUnitConfiguration(): Observable<Array<UnitConfiguration>> {
    if (!this.unitConfiguration) {
      this.unitConfiguration = this.httpClient.get<any>('/api/gameConfigurations/unit');
    }
    return this.unitConfiguration;
  }

  getGroundConfiguration(): Observable<Array<GroundConfiguration>> {
    if (!this.groundConfiguration) {
      this.groundConfiguration = this.httpClient.get<any>('/api/gameConfigurations/ground');
    }
    return this.groundConfiguration;
  }
}
