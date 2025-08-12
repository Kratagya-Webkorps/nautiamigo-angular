import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-reservation-booking',
  templateUrl: './reservation-booking.component.html',
  styleUrls: ['./reservation-booking.component.css'],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ReservationBookingComponent implements OnInit {
  
  ngOnInit() {
    register();
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
