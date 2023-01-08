import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetorderbycityService } from '../Services/getorderbycity.service';
import { Router } from '@angular/router';
import { LoginServiceService } from '../Services/login-service.service';

// import { JwtHelperService, JwtModule } from "@auth0/angular-jwt";

@Component({
  selector: 'app-order-by-city',
  templateUrl: './order-by-city.component.html',
  styleUrls: ['./order-by-city.component.css'],
})
export class OrderByCityComponent implements OnInit {
  constructor(
    private loginService: LoginServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private getOrderByCityService: GetorderbycityService
  ) {}
  //orderId:number=6;
  p:any;
  data: any;
 
  ngOnInit(): void {
    // this.route.queryParams
    //     .subscribe(params => {
    //          //this.city = params['city'];
    //         //console.log(this.city);
    //     });
    this.getOrderByCityService.getOrdersByCity().subscribe(
      (response) => {
        // console.log('success', response);
        this.data = response;
        
      },
      (error) => {
        console.log(error);
      if(error.status!=200){
        this.router.navigate(['error']);
            }
      }
    );
  }
  onSubmit(id: number) {
    // console.log(id);
    this.router.navigate(['orderdetails'], { queryParams: { orderId: id } });
  }
}
