import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../Services/login-service.service';
import { UpdateOrderService } from '../Services/update-order.service';
import { OrderDetailsService } from '../Services/order-details.service';


@Component({
  selector: 'app-get-staff-orders',
  templateUrl: './get-staff-orders.component.html',
  styleUrls: ['./get-staff-orders.component.css'],
})
export class GetStaffOrdersComponent implements OnInit {
  constructor(
    private loginService: LoginServiceService,
    private getStaffOrders: OrderDetailsService,
    private updateOrderService: UpdateOrderService,
    private router: Router
  ) {}
  p:any;
  staffOrders: any;

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.getStaffOrders.getStaffOrders().subscribe((data) => {
      // console.log('success', data);
      this.staffOrders = data;
    });
  }
  onSubmit(orderId: number) {
    this.updateOrderService.updateOrder(orderId, 1004).subscribe(
      (data) => {
        // console.log('Delivered', data);
        this.loadData();
      },
      (error) => {
        console.log(error);
      if(error.status==0){
        this.router.navigate(['error']);
            }
      }
    );
  }
  
  removeOrder(orderId: number) {
    if(confirm('Are you sure you want to remove order?')){
    this.updateOrderService.removeOrder(orderId).subscribe((data) => {
      // console.log(data.toString);
      this.loadData();
    });
  }
}

  backToDelivery() {
    this.router.navigate(['orderbycity']);
  }
}
