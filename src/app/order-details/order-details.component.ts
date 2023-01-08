import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService } from '../Services/login-service.service';
import { OrderDetailsService } from '../Services/order-details.service';
import { UpdateOrderService } from '../Services/update-order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
})
export class OrderDetailsComponent implements OnInit {
  constructor(
    private loginService: LoginServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private getOrderDetails: OrderDetailsService,
    private updateOrderService: UpdateOrderService
  ) {}
  orderUpdated!: boolean;
  orderId!: number;
  orderData: any;
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.orderId = params['orderId'];
      // console.log(this.orderId);
    });
    this.getOrderDetails.getOrderDetails(this.orderId).subscribe(
      (data) => {
        // console.log('success', data);
        this.orderData = data;
      },
      (error) => {
        console.log(error);
      if(error.status==0){
        this.router.navigate(['error']);
            }
      }
    );
  }
  addToDelivery(id: number) {
    this.updateOrderService.updateOrder(id, 1003).subscribe(
      (data) => {
        // console.log('update success');
        this.orderUpdated = data;
        // console.log(this.orderUpdated);
        if (this.orderUpdated) {
          this.router.navigate(['getstafforders']);
        }
      },
      (error) => console.log(error)
    );
  }
  backToDelivery() {
    this.router.navigate(['orderbycity']);
  }
}
