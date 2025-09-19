import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-reservation-booking',
  templateUrl: './reservation-booking.component.html',
  styleUrls: ['./reservation-booking.component.css'],
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ReservationBookingComponent implements OnInit {

  today: string = '';
  selectedDate: string = '';

  // Text content for the page
  heroStars: string = '★★★★★';
  cruiseDescription: string = 'Experience ultimate luxury aboard a Triple-Deck VIP Cruise, featuring an AC Deck with VIP Lounge, a Private Jetty with Waiting Lounge, and an Open-to-Sky Dance Floor. Enjoy a Reserved Private Table for your family and unmatched comfort throughout your journey.';
  reservationLabel: string = 'Reservation';
  reservationPhone: string = '932 410 5081';
  callText: string = "Call us, it's free.";
  bookingFormHeading1: string = 'Nauti Amigo Luxury Cruise';
  bookingFormHeading2: string = 'Cruise Enquiry Form';
  inputPlaceholders = {
    name: 'Name',
    phone: 'Phone Number',
    date: 'Activity Date',
    adults: 'Adults',
    children: 'Children'
  };
  submitButtonText: string = 'Check Availability';

  clients = [
    { src: '../../assets/clients/1.png', alt: 'Client 1' },
    { src: '../../assets/clients/2.png', alt: 'Client 2' },
    { src: '../../assets/clients/3.png', alt: 'Client 3' },
    { src: '../../assets/clients/4.png', alt: 'Client 4' },
    { src: '../../assets/clients/5.png', alt: 'Client 5' },
    { src: '../../assets/clients/6.png', alt: 'Client 6' }
  ];

  ngOnInit() {
    register();
    this.today = new Date().toISOString().split('T')[0]; 
  }
}
