import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import aboutSectionData from '../constants/about-section.json';  

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent {

  stars = Array(aboutSectionData.stars).fill(0); 

  sectionSubtitle = aboutSectionData.sectionSubtitle;
  sectionTitle = aboutSectionData.sectionTitle;

  descriptionParagraphs = aboutSectionData.descriptionParagraphs;

  reservationText = aboutSectionData.reservation.text;
  phoneNumber = aboutSectionData.reservation.phoneNumber;
  phoneLink = aboutSectionData.reservation.phoneLink;
  images = aboutSectionData.images;

}
