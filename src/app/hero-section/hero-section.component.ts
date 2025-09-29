import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import heroData from '../constants/hero-section.json';

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
  styleUrls: ['./hero-section.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeroSectionComponent implements OnInit, AfterViewInit {

  slides: Slide[] = heroData.slides;


  reservationPhone: string = heroData.reservation.phone;
  reservationText: string = heroData.reservation.text;

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
