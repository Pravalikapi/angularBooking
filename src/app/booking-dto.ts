export class BookingDTO {
    bookingId:number;
    name:string;
    hotelId: number;
     roomId: number;
     userId: number;
    bookedFrom:number;
    bookedTo :number;
    noOfAdults: number;
    noOfChildren:number;
    
     

constructor(
    bookingId:number,
    name:string,
   
    hotelId: number,
     roomId: number,
     userId: number,
    bookedFrom:number,
    bookedTo :number,
    noOfAdults: number,
    noOfChildren:number,
    
){
    this.bookingId=bookingId;
this.name=name;
this.hotelId=hotelId;
this.roomId=roomId;
this.userId=userId;
this.bookedFrom=bookedFrom;
this.bookedTo=bookedTo;
this.noOfAdults=noOfAdults;
this.noOfChildren=noOfChildren;
}
}
