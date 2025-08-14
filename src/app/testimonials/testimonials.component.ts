import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Swiper modules
import { register } from 'swiper/element/bundle';

// Register Swiper custom elements
register();

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  image: string;
  rating: number;
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

  testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Had a great experience....went with my family....better than other cruise as I have tried other one as well last year....they have Air conditioner Vip lounge as well, fun activities for kids, couples, dance, good food.....can surely try once if you want to have dinner cruise experience....crew is also very nice and helpful.",
      name: "CHARUL ARORA",
      title: "Guest review",
      image: "assets/img/team/4.jpg",
      rating: 5
    },
    {
      id: 2,
      quote: "Had an amazing time at nauti Amigo cruise, The vip lounge was fantastic, and the food was spot on. Big thanks to the team for their support. Truly a memorable experience Highly recommend.",
      name: "DOLLY BAJAJ",
      title: "Guest review", 
      image: "assets/img/team/5.jpg",
      rating: 5
    },
    {
      id: 3,
      quote: "Great experience. Was there on the occasion of my wife's bday and asked the hosts for a cake 10 mins before departure. Still the hosts especially Shelton was too helpful and got the same arranged. Thank you so much guys for making this happen. Wonderful experience and had lots of fun. Definitely recommended.",
      name: "SARVESH KUMAR RAI",
      title: "Guest review",
      image: "assets/img/team/1.jpg", 
      rating: 5
    }
  ];

  ngOnInit(): void {
    // Component initialization
  }

  generateStars(rating: number): number[] {
    return new Array(rating).fill(0).map((x, i) => i);
  }
}