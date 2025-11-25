import BookingForm from "./BookingForm";
import { useState,useEffect } from "react";
function Reservation({state,dispatch}){
 

    return(
       <main className="reserve">
        <h1>Book a table</h1>
       <BookingForm state={state} dispatch={dispatch} className='bookingform'/>
       </main>
      
    );
}
export default Reservation;
