import { Component } from '@angular/core';
import { AddDetails } from '../add-details';
import { BookingOperationService } from '../booking-operation.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent {

  today: string = new Date().toISOString().slice(0, 10);
  model: AddDetails = new AddDetails(0,'',0,0,0,0,0,0,0);
  submitted = false;
  success = false;
  error = false;
  
  status = false;
  message = '';
  constructor(private bookingService:BookingOperationService) {}

  onSubmit() {
    this.bookingService.submitBookingDetails(this.model).subscribe(

      data=>{
        this.status=true;
        this.message="Booking submitted";

      },
      error=>{

      }

    );

    

   
  }


}



