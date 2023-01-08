import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetorderbycityService {
  _url = 'http://localhost:48090/api/Order/OrdersByCity/';
  
  constructor(private _http: HttpClient) { }
  getOrdersByCity():Observable<any>{
    // let queryParams = new HttpParams({ fromObject: parameters });
    // queryParams = queryParams.append("city",city);
    return this._http.get(this._url).pipe(catchError(this.errorHandler));;
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
 
}
