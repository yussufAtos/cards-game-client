import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class CardService {

  constructor(private httpClient: HttpClient) {
  }

  getCards(): Observable<any> {
    return this.httpClient
      .get('http://localhost:8080/playCards');
  }

}