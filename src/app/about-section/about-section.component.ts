import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-section',
  imports: [CommonModule],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.css'
})
export class AboutSectionComponent {

  

  // Star Rating Configuration
  stars = Array(5).fill(0); 

  // Section Headers
  sectionSubtitle = 'NAUTI AMIGO Luxury Cruise';
  sectionTitle = 'Enjoy a Luxury Experience';

  // Main Description 
  descriptionParagraphs = [
    'Embark on a journey of luxury and relaxation with NAUTI AMIGO, Goa\'s premium cruise experience. Designed for those who appreciate the finer things in life, NAUTI AMIGO offers an unparalleled blend of comfort, entertainment, and scenic beauty along the mesmerizing Goan coastline.',
    'NAUTI AMIGO combines Goan charm with international standards of luxury, making it a must-try experience for locals and tourists alike. Whether you\'re seeking a romantic getaway, a memorable celebration, or a serene escape, this cruise offers something for everyone.'
  ];

  // Reservation Information
  reservationText = 'Reservation';
  phoneNumber = '932 410 5081';
  phoneLink = 'tel:932-410-5081';

  // Images Configuration
  images = {
    first: {
      src: './assets/img/rooms/8.jpeg',
      alt: 'NAUTI AMIGO Luxury Cruise Experience'
    },
    second: {
      src: './assets/img/rooms/2.jpeg',
      alt: 'NAUTI AMIGO Cruise Interior'
    }
  };

}