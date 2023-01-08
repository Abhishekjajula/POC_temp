import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderDetailsService {
  _url = 'http://localhost:48090/api/Order/';
  constructor(private _http: HttpClient) {}
  getOrderDetails(id: number): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('orderId', id);
    return this._http.get(this._url + id)
    .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
  getStaffOrders() {
    return this._http.get(this._url + 'GetStaffOrders/' + 1003).pipe(catchError(this.errorHandler));
  }
}
