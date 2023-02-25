import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookingDTO } from './booking-dto';
import { AddDetails } from './add-details';

@Injectable({
  providedIn: 'root'
})
export class BookingOperationService {

  baseURL:string= 'http://localhost:2001';
  
  allBookingEndpoint:string = this.baseURL+'/booking/bookings';

  submitBookingDetailsEndPoint:string=this.baseURL+'/booking/add';

  getBookingByIdEndPoint:string=this.baseURL+'/booking/bookingId';

  getBookingByDateEndPoint:string=this.baseURL+'/booking/byBookedFrom';

  bookingArr:BookingDTO[]=[]

  constructor(private http:HttpClient) { }


  submitBookingDetails(addDetails:AddDetails ):Observable<AddDetails>
 {

  console.log("inside method 1 : Booking added" +addDetails);
  
  return this.http.post<AddDetails>(`${this.submitBookingDetailsEndPoint}`,addDetails);
  
}

  getAllBookingsFromSpring():Observable<BookingDTO[]>
  {
    console.log("inside service : "+this.allBookingEndpoint);
      return this.http.get<BookingDTO[]>(`${this.allBookingEndpoint}`);
  }



getBookingById(bookingIdOfAddDetails:number):Observable<BookingDTO[]>{

  console.log("Inside Method 1 "+this.getBookingByIdEndPoint);
  this.getBookingByIdEndPoint=this.getBookingByIdEndPoint+'/'+bookingIdOfAddDetails;
  console.log("After adding time 2 "+this.getBookingByIdEndPoint);

  return this.http.get<BookingDTO[]>(`${this.getBookingByIdEndPoint}`);
}

getBookingBydate(bookedFrom:string):Observable<BookingDTO[]>{

  console.log("Inside Method 1 "+this.getBookingByDateEndPoint);
  this.getBookingByIdEndPoint=this.getBookingByDateEndPoint+'/'+bookedFrom;
  console.log("After adding time 2 "+this.getBookingByDateEndPoint);

  return this.http.get<BookingDTO[]>(`${this.getBookingByDateEndPoint}`);
}


}

