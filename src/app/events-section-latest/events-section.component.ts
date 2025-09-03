import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';

@Component({
  selector: 'app-events-section-latest',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events-section.component.html',
  styleUrls: ['./events-section.component.css']
})
export class EventsSectionLatestComponent implements AfterViewInit {
  events = [
    {
      id: 1,
      title: 'Waterfront Weddings',
      description: `Imagine celebrating your special day on the open-air deck of a private luxury cruise boat in Goa with the beautiful skyline as your backdrop. Waterfront weddings in Goa offer a unique, refreshing alternative to more traditional wedding venues on land. Our luxury cruise boat in Goa offers stunning, magical settings for weddings, receptions, rehearsal dinners, proposals, and more.`,
      image: 'assets/img/events/wedding.jpg'
    },
    {
      id: 2,
      title: 'Corporate Events',
      description: `There is nothing more enjoyable than spending a relaxing day or night floating down the waters of Goa on a luxury cruise boat. Whether it's dancing or good conversation and food, sharing time on a luxurious party boat in Goa can bring almost any group of people together. That's why more and more companies are choosing to reward their employees with the good time fun of a day or night on a party boat in Goa. If you are looking for a unique way to encourage team bonding within your company, renting a luxury cruise boat in Goa for corporate team building is a great way to bring your employees together.`,
      image: 'assets/img/events/corporate.jpg'
    }
  ];

  ngAfterViewInit() {
    // Initialize Swiper after view is loaded
    setTimeout(() => {
      const swiper = new Swiper('.events-swiper', {
        modules: [Navigation, Autoplay, EffectFade],
        loop: true,
        speed: 1000,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }, 0);
  }
}
