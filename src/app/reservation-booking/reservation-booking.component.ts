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

  today: string = '';  // <-- will hold today’s date in yyyy-mm-dd format
  selectedDate: string = '';  // <-- Added to store the selected date from the date picker

  // Method to show the date picker when the input is focused
  showDatePicker(event: Event) {
    const input = event.target as HTMLInputElement;
    if ('showPicker' in HTMLInputElement.prototype) {
      input.showPicker();
    }
  }

  ngOnInit() {
    register();

    // Set today's date in yyyy-mm-dd
    this.today = new Date().toISOString().split('T')[0];
    
    // Setup date input handling after view is initialized
    this.setupDateInputHandling();
  }

  private setupDateInputHandling() {
    // This will run after the view is initialized
    const dateInput = document.getElementById('appointment_date') as HTMLInputElement;
    if (dateInput) {
      dateInput.addEventListener('focus', () => {
        dateInput.type = 'date';
      });
      
      dateInput.addEventListener('input', () => {
        // Only change type if the input is empty
        if (!dateInput.value) {
          dateInput.type = 'text';
        }
      });
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
