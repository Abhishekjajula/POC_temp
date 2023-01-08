import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../Services/login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn():boolean{
    if(localStorage.getItem('token')==null){
      return false;
    }
    else{
      return true;
    }
  }
  constructor(public loginService:LoginServiceService,private router:Router) {
       }

  ngOnInit(): void {
    
  }
}
   
