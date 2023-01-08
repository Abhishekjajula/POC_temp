import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterVM } from '../Models/register-vm';
import { LoginServiceService } from '../Services/login-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  submitted!: boolean;
  errorMsg!:string;
  user:any;
  token: string = '';
  registerModel = new RegisterVM();
  constructor(private register: LoginServiceService, private router: Router) {}
error!:string;

  
  onSubmit() {
    if(this.registerModel.password!=this.registerModel.confirmPassword)
    {
    this.errorMsg='Passwords Do Not Match Please Try Again'
    }
    else
    {
    this.submitted = true;
    // console.log(this.registerModel);
    this.register.register(this.registerModel).subscribe(
      (data) => {
        this.register.isLoggedIn=true;
       this.user=data;
        this.token = this.user.token;
        localStorage.setItem('token', this.token);
        // console.log('register success', data);
        this.router.navigate(['orderbycity']);
      
      }
    ,
      (error) => {
        // if(error.status===406){
        //   this.error='Passwords Do Not Match, Please try again'
        // }
        console.log(error.message);
      }
    );
    }
  }
  ngOnInit(): void {
    
  }

}
