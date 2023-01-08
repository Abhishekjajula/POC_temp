import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../Services/login-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  constructor(
    private loginService: LoginServiceService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.router.navigate(['landingpage']);
    localStorage.removeItem('token');
  }
}
