import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import * as jwt_decode from "jwt-decode";

@Injectable()
export class GFTService {

	public API: string = 'https://mighty-refuge-81707.herokuapp.com/api';
	public header: HttpHeaders = new HttpHeaders({
	    'Content-Type':  'application/json',
	    'Access-Control-Allow-Origin': '*'
	  });
  public show: boolean = false;
  public decoded;

  constructor(
  	private router: Router, 
  	private http: HttpClient) {

  }

  getDecodedAccessToken(token: string): any {
    try{
        return this.decoded = jwt_decode(token)
    }
    catch(Error){
        return null;
    }
  }

  setToStorage(key, items){
  	localStorage.setItem(key, items)
  }

  getBase(folder) {
  	let newHeader = this.header.append('x-access-token', localStorage.getItem('tokenGFT'))
    return this.http.get(`${this.API}/${folder}`, {headers: newHeader}).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  postBase(folder, data) {
  	let newHeader = this.header.append('x-access-token', localStorage.getItem('tokenGFT'))
    return this.http.post(`${this.API}/${folder}`, data, {headers: newHeader}).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  loginPost(folder, data) {
    return this.http.post(`${this.API}/${folder}`, data).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      //errMsg = error.message ? error.message : error.toString();
      errMsg = error.error.success || error.error.error.toString();
    }
    console.error(errMsg);
    return throwError(errMsg)
  }

}
