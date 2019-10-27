import { Injectable, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MapView } from '../model/mapView';





@Injectable()
export class MapService implements OnInit {

  private mapSource: Subject<MapView> = new BehaviorSubject(undefined);
  currentMap: Observable<MapView> = this.mapSource.asObservable();

  constructor(private  httpClient: HttpClient) {
    this.updateMap(500, 500, 50).subscribe();
   }


  ngOnInit() {

  }

  // Update the current map. Subscribe to know when update is finished.
  updateMap(beginX: number, beginY: number, size: number) {
    console.log('updateMap');
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
