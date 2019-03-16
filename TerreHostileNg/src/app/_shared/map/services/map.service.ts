import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MapService {

  constructor(private  httpClient: HttpClient) { }

  getMapByXYAndSize(beginX:number, beginY: number, size: number): Observable<any> {

    let params = '?beginX=' + beginX + '&beginY=' + beginY + '&size=' + size;
    return this.httpClient.get<any>('/api/admin/mapEditorGetMapByXYAndSize' + params);
  }

  saveMap(map: any): Observable<any> {

    return this.httpClient.post<any>('/api/admin/mapEditorSaveMap', map);
  }


}
