import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Joke } from './joke';

@Injectable({
    providedIn: 'root' // HERE
  })
export class AppService {
  usersUrl = '/jokes_api'; // URL to web api
  headers= new HttpHeaders({'X-Api-Key': 'm5yAi8oeAz9T5U9qne+5MA==UQYLvIVpL1ut3cab'});
  //private handleError: HandleError;

  constructor(private http: HttpClient) {
    //this.handleError = httpErrorHandler.createHandleError('UsersService');
  }

  /** GET jokes from the server */
  getJokes(): Observable<Joke[]> {
    return this.http.get<Joke[]>(this.usersUrl, {headers:  this.headers});
  }

}
