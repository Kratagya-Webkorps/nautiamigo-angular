import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import additionalServicesData from '../constants/additional-services.json';

interface ServiceConfig {
  id: number;
  title: string;
  description: string;
  icon: string;
  animationDelay: number;
  customClass?: string;
}

interface AdditionalServicesConfig {
  section: {
    subtitle: string;
    title: string;
    cssClasses: {
      sectionWrapper: string;
      container: string;
      headingRow: string;
      headingCol: string;
      servicesRow: string;
      serviceCol: string;
      facilityBox: string;
      animateBox: string;
    };
  };
  services: ServiceConfig[];
  animations: {
    intersectionThreshold: number;
    staggerDelay: number;
    fadeInClass: string;
  };
}

@Component({
  selector: 'app-additional-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './additional-services.component.html',
  styleUrls: ['./additional-services.component.css']
})
export class AdditionalServicesComponent implements OnInit, AfterViewInit {

  config: AdditionalServicesConfig = additionalServicesData;

  get services(): ServiceConfig[] {
    return this.config.services;
  }

  get sectionConfig() {
    return this.config.section;
  }

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initializeScrollAnimations();
  }

  initializeScrollAnimations(): void {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            
            setTimeout(() => {
              el.classList.add(this.config.animations.fadeInClass);
            }, index * this.config.animations.staggerDelay);

            obs.unobserve(el);
          }
        });
      },
      { threshold: this.config.animations.intersectionThreshold }
    );

    const elements = document.querySelectorAll(`.${this.config.section.cssClasses.animateBox}`);
    elements.forEach((el) => observer.observe(el));
  }

  onServiceHover(serviceId: number): void {
    console.log(`Service ${serviceId} hovered`);
  }

  getServiceClasses(service: ServiceConfig): string {
    const baseClasses = `${this.config.section.cssClasses.facilityBox} ${this.config.section.cssClasses.animateBox}`;
    return service.customClass ? `${baseClasses} ${service.customClass}` : baseClasses;
  }

  getAnimationDelayStyle(delay: number): { [key: string]: string } {
    return { 'animation-delay': `${delay}ms` };
  }
}
