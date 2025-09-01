import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';

@Component({
  selector: 'app-hero-section',
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HeroSectionComponent implements OnInit, AfterViewInit {
  

  ngOnInit() {
    console.log('Hero section initialized with Swiper');
  }

  ngAfterViewInit() {
    // Initialize Swiper after view is loaded
    setTimeout(() => {
      const swiper = new Swiper('.hero-swiper', {
        modules: [Navigation, Autoplay, EffectFade],
        
        // Basic settings
        loop: true,
        speed: 100,
        
        // Effect
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        
        // Autoplay
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false
        },
        
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
        
        // Responsive
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          }
        }
      });

      console.log('Swiper initialized successfully');
    }, 100);
  }
}