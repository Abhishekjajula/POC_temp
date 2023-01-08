import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdateOrderService {
  _url = 'http://localhost:48090/api/Order/UpdateOrder';
  constructor(private _http: HttpClient) {}
  updateOrder(id: number, statusId: number): Observable<any> {
    return this._http.get(
      `http://localhost:48090/api/Order/UpdateOrder/${id}/${statusId}`
    ).pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
  removeOrder(id: number) {
    return this._http.get(`http://localhost:48090/api/Order/RemoveOrder/${id}`)
    .pipe(catchError(this.errorHandler));
  }
}
