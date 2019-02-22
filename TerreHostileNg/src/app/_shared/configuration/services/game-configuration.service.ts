
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GameConfigurationService {

  constructor(private  httpClient: HttpClient) { }

  getBuildingConfiguration(): Observable<any> {
    return this.httpClient.get<any>('/gameConfigurations/building');
  }

  getResourceConfiguration(): Observable<any> {
    return this.httpClient.get<any>('/gameConfigurations/resource');
  }

  getUnitConfiguration(): Observable<any> {
    return this.httpClient.get<any>('/gameConfigurations/unit');
  }

  getGroundConfiguration(): Observable<any> {
    return this.httpClient.get<any>('/gameConfigurations/ground');
  }
}
