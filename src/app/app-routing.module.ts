import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OrderByCityComponent } from './order-by-city/order-by-city.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { GetStaffOrdersComponent } from './get-staff-orders/get-staff-orders.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error.component';
import { Error404Component } from './error404/error404.component';
import { RouteGuardServiceService } from './Services/route-guard-service.service';


const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'landingpage',component:LandingPageComponent},
  {path:'logincomponent',component:LoginComponent},
  {path:'registercomponent',component:RegisterComponent},
  {path:'orderbycity',component:OrderByCityComponent,canActivate:[RouteGuardServiceService]},
  {path:'orderdetails',component:OrderDetailsComponent,canActivate:[RouteGuardServiceService]},
  {path:'getstafforders',component:GetStaffOrdersComponent,canActivate:[RouteGuardServiceService]},
  {path:'logoutcomponent',component:LogoutComponent},
  {path:'error', component :ErrorComponent},
  {path:'**',component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
