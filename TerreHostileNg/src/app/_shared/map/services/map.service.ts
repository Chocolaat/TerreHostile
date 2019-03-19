import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MapView } from '../model/mapView';

@Injectable()
export class MapService {

  constructor(private  httpClient: HttpClient) { }

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  private mapSource = new BehaviorSubject(new MapView());
  currentMap = this.mapSource.asObservable();
 //currentMap = this.getMapByXYAndSize(440, 400, 30);

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  updateMap(beginX: number, beginY: number, size: number) {
    console.log('MapUpdated');
    this.getMapByXYAndSize(beginX, beginY, size).subscribe(
      (map) => {
        console.log('MapNexted');
        console.log(map);
        this.mapSource.next(map);
        this.messageSource.next('Hey');
      });


  //  }
   // this.mapSource.next();
    // this.mapSource.next('toto');
    //this.getMapByXYAndSize(440, 400, 30)
  }

  getMapByXYAndSize(beginX:number, beginY: number, size: number): Observable<any> {

    let params = '?beginX=' + beginX + '&beginY=' + beginY + '&size=' + size;
    return this.httpClient.get<any>('/api/map' + params);
  }

  saveMap(map: any): Observable<any> {

    return this.httpClient.post<any>('/api/map', map);
  }


}
