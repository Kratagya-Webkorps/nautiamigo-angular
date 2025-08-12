import { Component } from '@angular/core';
// Import Swiper core and required modules
import { Swiper } from 'swiper';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Initialize Swiper modules
Swiper.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-promo-testimonials',
  templateUrl: './promo-testimonials.component.html',
  styleUrls: ['./promo-testimonials.component.css']
})
export class PromoTestimonialsComponent {
  facilities = [
    { icon: 'flaticon-world', title: 'MEETINGS', description: 'Pickup and Drop available from North Goa specific locations.' },
    { icon: 'flaticon-car', title: 'CONFERENCES', description: 'Complimentry drinks are included in the offerings.' },
    { icon: 'flaticon-bed', title: 'SEMINARS', description: 'Ride will be safe and secure for all the biddies joining.' },
    { icon: 'flaticon-swimming', title: 'FILM SHOOTS', description: 'Celebrate Your Last Night of Singledom on a Bachelorette Party Boat in Goa.' },
    { icon: 'flaticon-wifi', title: 'BIRTHDAYS', description: 'Renewing your vows? Celebrating a lifetime of love with your husband or wife.' },
    { icon: 'flaticon-breakfast', title: 'FAMILY EVENTS', description: 'Makes sense that you‘d want to throw a big party for your loved one when it‘s their turn to move on.' }
  ];

  testimonials = [
    {
      text: `Had a great experience....went with my family....better than other cruise as I have tried other one as well last year....they have Air conditioner Vip lounge as well, fun activities for kids, couples , dance, good food.....can surely try once if you want to have dinner cruise experience....crew is also very nice and helpful.`,
      image: 'assets/img/team/4.jpg',
      name: 'Charul Arora',
      role: 'Guest review'
    },
    {
      text: `Great experience. Was there on the occasion of my wife’s bday and asked the hosts for a cake 10 mins before departure. Still the hosts especially Shelton was too helpful and got the same arranged. Thank you so much guys for making this happen. Wonderful experience and had lots of fun. Definitely recommended.`,
      image: 'assets/img/team/1.jpg',
      name: 'Sarvesh Kumar Rai',
      role: 'Guest review'
    },
    {
      text: `Had an amazing time at nauti Amigo cruise, The vip lounge was fantastic, and the food was spot on. Big thanks to the team for their support. Truly a memorable experience. Highly recommend.`,
      image: 'assets/img/team/5.jpg',
      name: 'Dolly Bajaj',
      role: 'Guest review'
    }
  ];

  // simple stars array for template *ngFor
  stars = new Array(5);
}
