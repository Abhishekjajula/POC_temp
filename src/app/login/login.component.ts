import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginVM } from '../Models/login-vm';
import { LoginServiceService } from '../Services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: any;
  submitted:boolean=false;
  errorMsg!:string;
  token: string = '';
  constructor(
    private router: Router,
    private loginService: LoginServiceService
  ) {}
  loginModel = new LoginVM();
  ngOnInit(): void {}
  onSubmit() {
    this.submitted=true;
    this.loginService.login(this.loginModel).subscribe(
      (data) => {
        // console.log('success', data);
        this.user = data;
        this.token = this.user.token;
        localStorage.setItem('token', this.token);
        // console.log(this.token);
        this.loginService.isLoggedIn = true;
        this.router.navigate(
          ['orderbycity'] /*,{queryParams: {city: this.city}}*/
        );
      },
      (error) => {
        console.log(error);
      if(error.status==0){
        this.router.navigate(['error']);
            }
      }
      //{
      //   if(error.status===404){
      //   this.errorMsg='Invalid Login Credentials, Please Try Again'
      //   }
      //   // console.log('error', error.status);
      // }
    );
    // console.log(this.loginModel);
  }
}
