import { Injectable, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MapView } from '../model/mapView';
import { AuthenticationService } from 'src/app/_core/authentication/authentication.service';





@Injectable()
export class MapService implements OnInit {

  private mapSource: Subject<MapView> = new BehaviorSubject(undefined);
  currentMap: Observable<MapView> = this.mapSource.asObservable();

  constructor(private  httpClient: HttpClient, private authenticationService: AuthenticationService) {

    this.authenticationService.currentUser.subscribe((u => {
      this.updateMap(u.startXCoord, u.startYCoord, 50).subscribe();
    }));


    const user = sessionStorage.getItem('username');


   }


  ngOnInit() {

  }

  // Update the current map. Subscribe to know when update is finished.
  updateMap(beginX: number, beginY: number, size: number) {
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
