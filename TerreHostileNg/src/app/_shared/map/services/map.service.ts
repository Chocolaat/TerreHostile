import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MapService {

  constructor(private  httpClient: HttpClient) { }

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  // private mapSource = new BehaviorSubject({currentXCoord: 0, currentYCoord: 0, size: 0});
  private mapSource = new BehaviorSubject(null);


 // currentMap = this.mapSource.asObservable();

  currentMap = this.getMapByXYAndSize(440, 400, 30);

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  updateMap() {
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
