import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  animationDelay: number;
}

@Component({
  selector: 'app-additional-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './additional-services.component.html',
  styleUrls: ['./additional-services.component.css']
})
export class AdditionalServicesComponent implements OnInit {

  services: Service[] = [
    {
      id: 1,
      title: 'MEETINGS',
      description: 'Pickup and Drop available from North Goa specific locations.',
      icon: 'flaticon-world',
      animationDelay: 0
    },
    {
      id: 2,
      title: 'CONFERENCES',
      description: 'Complimentry drinks are included in the offerings.',
      icon: 'flaticon-car',
      animationDelay: 200
    },
    {
      id: 3,
      title: 'SEMINARS',
      description: 'Ride will be safe and secure for all the biddies joining.',
      icon: 'flaticon-bed',
      animationDelay: 400
    },
    {
      id: 4,
      title: 'FILM SHOOTS',
      description: 'Celebrate Your Last Night of Singledom on a Bachelorette Party Boat in Goa.',
      icon: 'flaticon-swimming',
      animationDelay: 600
    },
    {
      id: 5,
      title: 'BIRTHDAYS',
      description: 'Renewing your vows? Celebrating a lifetime of love with your husband or wife.',
      icon: 'flaticon-wifi',
      animationDelay: 800
    },
    {
      id: 6,
      title: 'FAMILY EVENTS',
      description: 'Makes sense that you\'d want to throw a big party for your loved one when it\'s their turn to move on.',
      icon: 'flaticon-breakfast',
      animationDelay: 1000
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.initializeAnimations();
  }

  initializeAnimations(): void {
    // Initialize fade-in animations after component loads
    setTimeout(() => {
      const elements = document.querySelectorAll('.animate-box');
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('fadeInUp');
        }, index * 200);
      });
    }, 100);
  }

  onServiceHover(serviceId: number): void {
    // Handle service hover effects if needed
    console.log(`Hovered on service ${serviceId}`);
  }
}