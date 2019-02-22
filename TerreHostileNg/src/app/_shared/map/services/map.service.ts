import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';

@Injectable()
export class MapService {

  constructor(private  httpClient: HttpClient) {
  }

}
