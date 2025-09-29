import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
import eventsData from '../constants/events-section.json';

register();

@Component({
  selector: 'app-events-section-latest',
  templateUrl: './events-section.component.html',
  styleUrls: ['./events-section.component.css'],
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EventsSectionLatestComponent {
  heading = eventsData.heading;
  subHeading = eventsData.subHeading;

  leftParagraphs = eventsData.leftParagraphs;

  contact = eventsData.contact;

  slides = eventsData.slides;
}
