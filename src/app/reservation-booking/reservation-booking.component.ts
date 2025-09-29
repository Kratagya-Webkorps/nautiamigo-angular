import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { register } from 'swiper/element/bundle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// Import the JSON content
import content from '../constants/reservation-booking.json';



@Component({
  selector: 'app-reservation-booking',
  templateUrl: './reservation-booking.component.html',
  styleUrls: ['./reservation-booking.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    // Angular Material (standalone) imports needed for the datepicker
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ReservationBookingComponent implements OnInit {

  // MatDatepicker expects Date for min/max; keep today as Date
  today: Date = new Date();
  selectedDate: Date | null = null;
  showCalendar: boolean = false;

  // Load content from JSON
  heroStars = content.heroStars;
  cruiseDescription = content.cruiseDescription;
  reservationLabel = content.reservationLabel;
  reservationPhone = content.reservationPhone;
  callText = content.callText;
  bookingFormHeading1 = content.bookingFormHeading1;
  bookingFormHeading2 = content.bookingFormHeading2;
  inputPlaceholders = content.inputPlaceholders;
  submitButtonText = content.submitButtonText;
  clients = content.clients;

  ngOnInit() {
    register();
    // 'today' already initialized; keep any init needed here if required
  }

  onDateChange(event: any) {
    this.selectedDate = event.target.value; 
  }

  onSubmit(event: Event) {
    event.preventDefault(); 
    window.scrollTo({ top: 0, behavior: 'smooth' }); 


    console.log('Form submitted!', this.selectedDate);
  }
}
