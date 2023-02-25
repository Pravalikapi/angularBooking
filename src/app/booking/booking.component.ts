import { Component } from '@angular/core';
import { BookingDTO } from '../booking-dto';
import { BookingOperationService } from '../booking-operation.service';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  allBookings:BookingDTO [] = [];
  constructor(private orderService:BookingOperationService)
  {
    orderService.getAllBookingsFromSpring().subscribe(
      data=>{
          this.allBookings = data;
      },
      err=>{
        console.log("Error "+err);
        
      }
    );
  }

}


