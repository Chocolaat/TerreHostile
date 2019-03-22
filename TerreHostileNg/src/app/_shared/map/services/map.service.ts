import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MapView } from '../model/mapView';

@Injectable()
export class MapService {

  constructor(private  httpClient: HttpClient) { }

  private mapSource = new BehaviorSubject(new MapView());
  currentMap = this.mapSource.asObservable();


  updateMap(beginX: number, beginY: number, size: number) {
    console.log('LAUNCH UPDATE');
      return new Observable<any>((observer) => {

        this.getMapByXYAndSize(beginX, beginY, size).subscribe(
          (map) => {
            this.mapSource.next(map);
            observer.next();
            observer.complete();
          });
    });
  }

  getMapByXYAndSize(beginX: number, beginY: number, size: number): Observable<any> {

    const params = '?beginX=' + beginX + '&beginY=' + beginY + '&size=' + size;
    return this.httpClient.get<any>('/api/map' + params);
  }

  saveMap(map: any): Observable<any> {

    return this.httpClient.post<any>('/api/map', map);
  }


}
