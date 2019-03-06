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
  buildingConfiguration: Map<number, BuildingConfiguration>;
  resourceConfiguration: Map<number, ResourceConfiguration>;
  unitConfiguration: Map<number, UnitConfiguration>;
  groundConfiguration: Map<number, GroundConfiguration>;

  constructor(private  httpClient: HttpClient) { }

  getBuildingConfiguration(): Observable<BuildingConfiguration> {
    return this.httpClient.get<any>('/gameConfigurations/building');
  }

  getResourceConfiguration(): Observable<ResourceConfiguration> {
    return this.httpClient.get<any>('/gameConfigurations/resource');
  }

  getUnitConfiguration(): Observable<UnitConfiguration> {
    return this.httpClient.get<any>('/gameConfigurations/unit');
  }

  getGroundConfiguration(): Observable<GroundConfiguration> {
    return this.httpClient.get<any>('/gameConfigurations/ground');
  }
}
