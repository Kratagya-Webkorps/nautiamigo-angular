import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';


register();

@Component({
  selector: 'app-events-section-latest',
  templateUrl: './events-section.component.html',
  styleUrls: ['./events-section.component.css'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EventsSectionLatestComponent {
  
}
