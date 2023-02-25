import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BookingComponent } from './booking/booking.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { FilterbydateComponent } from './filterbydate/filterbydate.component';

const allLinks:Routes = [
  {path:'about',component:AboutComponent},
  {path:'bookings',component:BookingComponent},
  {path:'bookingdetails',component:BookingDetailsComponent},
  {path:'filetrbydate',component:FilterbydateComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BookingComponent,
    BookingDetailsComponent,
    FilterbydateComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,HttpClientModule,
    AppRoutingModule,RouterModule.forRoot(allLinks)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
