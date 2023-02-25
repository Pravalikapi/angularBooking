import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddDetails } from '../add-details';
import { BookingDTO } from '../booking-dto';
import { BookingOperationService } from '../booking-operation.service';

@Component({
  selector: 'app-filterbydate',
  templateUrl: './filterbydate.component.html',
  styleUrls: ['./filterbydate.component.css']
})



export class FilterbydateComponent {

  allBooking:BookingDTO[]=[];

  constructor(private bookingService:BookingOperationService)
  {

    console.log("All Bookings")
    bookingService.getAllBookingsFromSpring().subscribe(
      data=>{
        this.allBooking=data;
      },
      err=>{
        console.log("Error"+err);
      }
    );
  }

  getBooking1(bookingId:string){
    this.bookingService.getBookingById(parseInt(bookingId)).subscribe(
      data=>{
        console.log("data :- "+data);
        
        this.allBooking = data;
      },err=>{
        console.log("error from spring ",err);
  
      } 
    );
  }
  getBooking2(bookedFrom:string){
    this.bookingService.getBookingById(parseInt(bookedFrom)).subscribe(
      data=>{
        console.log("data :- "+data);
        
        this.allBooking = data;
      },err=>{
        console.log("error from spring ",err);
  
      } 
    );
  }





}



