import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { LoginVM } from '../Models/login-vm';
import { RegisterVM } from '../Models/register-vm';
@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  _url = 'http://localhost:48090/api/Account/';
  constructor(private _http: HttpClient) {}
  isLoggedIn: boolean = false;
  
  login(loginModel: LoginVM) {
    return this._http
      .post<LoginVM>(this._url + 'Login', loginModel)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
  register(registerModel: RegisterVM) {
    return this._http
      .post<LoginVM>(this._url + 'Register', registerModel)
      .pipe(catchError(this.errorHandler));
  }
  iSLoggedIn(){
    return this.iSLoggedIn;
      }
  // logout():Observable<any>{
  //   return this._http.get(this._url+"Logout")
  // }
}
