import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  animationDelay: number;
  customClass?: string;
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
      icon: 'fas fa-globe',
      animationDelay: 0
    },
    {
      id: 2,
      title: 'CONFERENCES',
      description: 'Complimentry drinks are included in the offerings.',
      icon: 'fas fa-glass-cheers',
      animationDelay: 200,
      customClass:"conferences"
    },
    {
      id: 3,
      title: 'SEMINARS',
      description: 'Ride will be safe and secure for all the biddies joining.',
      icon: 'fas fa-chalkboard-teacher',
      animationDelay: 400,
      customClass: 'seminars'
    },
    {
      id: 4,
      title: 'FILM SHOOT',
      description: 'Celebrate Your Last Night of Singledom on a Bachelorette Party Boat in Goa.',
      icon: 'fas fa-video',
      animationDelay: 0
    },
    {
      id: 5,
      title: 'BIRTHDAYS',
      description: 'Renewing your vows? Celebrating a lifetime of love with your husband or wife.',
      icon: 'fas fa-birthday-cake',
      animationDelay: 200
    },
    {
      id: 6,
      title: 'FAMILY EVENTS',
      description: 'Makes sense that you‘d want to throw a  party for your loved one when it‘s their turn.',
      icon: 'fas fa-users',
      animationDelay: 400,
      customClass: 'family-events'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.initializeAnimations();
  }

  initializeAnimations(): void {
    
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
    
    
  }
}