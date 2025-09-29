import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
import testimonialsData from '../constants/testimonials.json';

register();

interface Testimonial {
  id: number;
  quote: string;
  authorName: string;
  authorTitle: string;
  authorImage: string;
  rating: number;
}

interface TestimonialsConfig {
  sectionClasses: {
    wrapper: string;
    container: string;
    headingClass: string;
    subHeadingClass: string;
    underlineClass: string;
    swiperClass: string;
  };
  headings: {
    main: string;
    sub: string;
  };
  testimonials: Testimonial[];
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestimonialsComponent implements OnInit {
  config: TestimonialsConfig = testimonialsData;

  ngOnInit(): void {}

  
  generateStars(rating: number): number[] {
    return Array(rating).fill(0).map((_, i) => i);
  }
}
