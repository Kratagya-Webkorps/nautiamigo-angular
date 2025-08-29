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

  // 🔹 NEW: control the input type dynamically
  dateInputType: string = 'text';

  ngOnInit() {
    register();
    this.today = new Date().toISOString().split('T')[0];
  }

  // 🔹 Switch to date input on focus
  switchToDate() {
    this.dateInputType = 'date';
  }

  // 🔹 Switch back to text if empty
  switchToText() {
    if (!this.selectedDate) {
      this.dateInputType = 'text';
    }
  }

  // Client logos data
  clients = [
    { src: '../../assets/clients/1.png', alt: 'Client 1' },
    { src: '../../assets/clients/2.png', alt: 'Client 2' },
    { src: '../../assets/clients/3.png', alt: 'Client 3' },
    { src: '../../assets/clients/4.png', alt: 'Client 4' },
    { src: '../../assets/clients/5.png', alt: 'Client 5' },
    { src: '../../assets/clients/6.png', alt: 'Client 6' }
  ];
}
