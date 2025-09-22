import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';

interface Slide {
  background: string;
  stars: number;
  subtitle: string;
  title: string;
  buttonText: string;
  buttonLink: string;
}

@Component({
  selector: 'app-hero-section',
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HeroSectionComponent implements OnInit, AfterViewInit {

  slides: Slide[] = [
    {
      background: 'assets/img/slider/1.jpeg',
      stars: 5,
      subtitle: 'EXPERIENCE THE LUXURY',
      title: 'ENJOY A LUXURY EXPERIENCE',
      buttonText: 'Our Offerings',
      buttonLink: '#'
    },
    {
      background: 'assets/img/slider/4.jpeg',
      stars: 5,
      subtitle: 'UNIQUE PLACE TO RELAX AND ENJOY',
      title: 'THE PERFECT BASE FOR YOU',
      buttonText: 'Our Offerings',
      buttonLink: '#'
    },
    {
      background: 'assets/img/slider/6.jpeg',
      stars: 5,
      subtitle: 'THE ULTIMATE LUXURY EXPERIENCE',
      title: 'ENJOY THE BEST MOMENTS OF LIFE',
      buttonText: 'Our Offerings',
      buttonLink: '#'
    }
  ];

  // Reservation details
  reservationPhone: string = '9324105081';
  reservationText: string = 'Reservation';

  ngOnInit() {
   // console.log('Hero section initialized with Swiper');
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const swiper = new Swiper('.hero-swiper', {
        modules: [Navigation, Autoplay, EffectFade],
        loop: true,
        speed: 1000,
        effect: 'fade',
        fadeEffect: { crossFade: true },
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          0: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 }
        }
      });

      
      const navBtns = document.querySelectorAll('.custom-nav .nav-btn');
      navBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => swiper.slideToLoop(index));
      });

      swiper.on('slideChange', () => {
        navBtns.forEach(btn => btn.classList.remove('active'));
        const activeIndex = swiper.realIndex;
        navBtns[activeIndex].classList.add('active');
      });

      (navBtns[0] as HTMLElement).classList.add('active');
    }, 100);
  }
}
