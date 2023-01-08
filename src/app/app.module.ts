import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OrderByCityComponent } from './order-by-city/order-by-city.component';
import { TokenInterceptor } from './Interceptor/token.interceptor';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { GetStaffOrdersComponent } from './get-staff-orders/get-staff-orders.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Error404Component } from './error404/error404.component';
import { MatFormFieldModule,MatToolbarModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    LoginComponent,
    RegisterComponent,
    OrderByCityComponent,
    OrderDetailsComponent,
    GetStaffOrdersComponent,
    LogoutComponent,
    
    ErrorComponent,
    Error404Component,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatToolbarModule,
    NgxPaginationModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
