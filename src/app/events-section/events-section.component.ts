import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { register } from 'swiper/element/bundle';

register(); // Register Swiper custom elements

@Component({
  selector: 'app-events-section',
  templateUrl: './events-section.component.html',
  styleUrls: ['./events-section.component.css'],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Allow custom elements
})
export class EventsSectionComponent implements AfterViewInit {
  events = [
    {
      img: 'assets/img/pricing/1.jpg',
      title: '1. Waterfront Weddings',
      desc: 'Imagine celebrating your special day on the open-air deck of a private luxury cruise boat in Goa with the beautiful skyline as your backdrop. Waterfront weddings in Goa offer a unique, refreshing alternative to more traditional wedding venues on land. Our luxury cruise boat in Goa offers stunning, magical settings for weddings, receptions, rehearsal dinners, proposals, and more.'
    },
    {
      img: 'assets/img/pricing/2.jpg',
      title: '2. Corporate Events',
      desc: 'There is nothing more enjoyable than spending a relaxing day or night floating down the waters of Goa on a luxury cruise boat. Whether it’s dancing or good conversation and food, sharing time on a luxurious party boat in Goa can bring almost any group of people together...'
    },
    {
      img: 'assets/img/pricing/3.jpg',
      title: '3. Team Bonding Parties',
      desc: 'If you are an employer or business owner who wants to help bring a little bit of fun to your work environment, choosing to rent a party boat will make your employees truly happy...'
    },
    {
      img: 'assets/img/pricing/2.jpg',
      title: '4. Bachelorette Parties',
      desc: 'Celebrate Your Last Night of Singledom on a Bachelorette Party Boat in Goa. There is NO party in the area like a boat party in Goa...'
    },
    {
      img: 'assets/img/pricing/1.jpg',
      title: '5. Retirement Party',
      desc: 'Retirement only comes around once, so it makes sense that you‘d want to throw a big party for your loved one when it‘s their turn to move on...'
    },
    {
      img: 'assets/img/pricing/2.jpg',
      title: '6. Anniversary Party',
      desc: 'Renewing your vows? Celebrating a lifetime of love with your husband or wife? We can help you plan the perfect vow renewal or anniversary party in Goa...'
    }
  ];

  pairedEvents: {img: string, title: string, desc: string}[][] = [];

  constructor() {
    // Group events in pairs
    for (let i = 0; i < this.events.length; i += 2) {
      this.pairedEvents.push(this.events.slice(i, i + 2));
    }
  }
  @ViewChild('swiperContainer') swiperContainer!: ElementRef<SwiperContainer>;

  // Swiper configuration
  config: SwiperOptions = {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 30,
    navigation: false,
    pagination: {
      clickable: true,
    },
    loop: true,
    centeredSlides: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30
      }
    }
  };

  ngAfterViewInit() {
    if (this.swiperContainer) {
      // The parameters need to be assigned to the nativeElement directly
      Object.assign(this.swiperContainer.nativeElement, this.config);
      // Initialize the swiper
      this.swiperContainer.nativeElement.initialize();
    }
  }
}