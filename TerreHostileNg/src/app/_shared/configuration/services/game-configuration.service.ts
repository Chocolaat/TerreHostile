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
  buildingConfiguration: Observable<Map<number, BuildingConfiguration>>;
  resourceConfiguration: Observable<Map<number, ResourceConfiguration>>;
  unitConfiguration: Observable<Map<number, UnitConfiguration>>;
  groundConfiguration: Observable<Map<number, GroundConfiguration>>;

  constructor(private  httpClient: HttpClient) { }

  getBuildingConfiguration(): Observable<Map<number, BuildingConfiguration>> {
    if (!this.buildingConfiguration) {
      this.buildingConfiguration = this.httpClient.get<any>('http://localhost:8082/TH_Web/gameConfigurations/building');
    }
    return this.buildingConfiguration;
  }

  getResourceConfiguration(): Observable<Map<number, ResourceConfiguration>> {
    if (!this.resourceConfiguration) {
      this.resourceConfiguration = this.httpClient.get<any>('http://localhost:8082/TH_Web/gameConfigurations/resource');
    }
    return this.resourceConfiguration;
  }

  getUnitConfiguration(): Observable<Map<number, UnitConfiguration>> {
    if (!this.unitConfiguration) {
      this.unitConfiguration = this.httpClient.get<any>('http://localhost:8082/TH_Web/gameConfigurations/unit');
    }
    return this.unitConfiguration;
  }

  getGroundConfiguration(): Observable<Map<number, GroundConfiguration>> {
    if (!this.groundConfiguration) {
      this.groundConfiguration = this.httpClient.get<any>('http://localhost:8082/TH_Web/gameConfigurations/ground');
    }
    return this.groundConfiguration;
  }
}
