import { Component, AfterViewInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import configData from '../constants/services-section.json';

interface Image {
  src: string;
  alt: string;
  link: string;
}

interface Content {
  category: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

interface Layout {
  imagePosition: string;
  animationEffect: {
    image: string;
    content: string;
  };
}

interface ServiceItemCssClasses {
  imageCol: string;
  contentCol: string;
  imageWrapper: string;
  contentWrapper: string;
}

interface ServiceItem {
  id: number;
  image: Image;
  content: Content;
  layout: Layout;
  cssClasses: ServiceItemCssClasses;
}
interface SectionClasses {
  wrapper: string;
  container: string;
  row: string;
  animateBox: string;
  backgroundDark: string;
  valign: string;
  padding: string;
  content: string;
  contentInner: string;
  textAlign: string;
  info: string;
  categoryClass: string;
  titleClass: string;
  descriptionClass: string;
  buttonWrapper: string;
  button: string;
  buttonSpan: string;
}

interface ServicesSectionConfig {
  section: {
    cssClasses: SectionClasses;
  };
  cssClasses: SectionClasses;
  services: ServiceItem[];
  animations: {
    staggerDelay: number;
    intersectionOptions: {
      rootMargin: string;
      threshold: number;
    };
    inViewClass: string;
    transitionDelay: number;
  };
}

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.css']
})
export class ServicesSectionComponent implements AfterViewInit, OnDestroy {
  
  trackByServiceId(index: number, service: ServiceItem): number {
    return service.id; 
  }

  private observer: IntersectionObserver | null = null;

  config: ServicesSectionConfig = configData as ServicesSectionConfig;

  get services(): ServiceItem[] {
    return this.config.services;
  }

  get sectionClasses() {
    return this.config.section.cssClasses;
  }

  get animationConfig() {
    return this.config.animations;
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    setTimeout(() => this.initializeAnimations(), this.animationConfig.transitionDelay);
  }

  private initializeAnimations(): void {
    const boxes = Array.from(this.el.nativeElement.querySelectorAll(`.${this.sectionClasses.animateBox}`)) as HTMLElement[];
    boxes.forEach((box, idx) => this.renderer.setStyle(box, 'transition-delay', `${idx * this.animationConfig.staggerDelay}ms`));

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: this.animationConfig.intersectionOptions.rootMargin,
      threshold: this.animationConfig.intersectionOptions.threshold
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const target = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          const effect = target.getAttribute('data-animate-effect');
          if (effect) this.renderer.addClass(target, effect);
          this.renderer.addClass(target, this.animationConfig.inViewClass);
          this.observer!.unobserve(target);
        }
      });
    }, options);

    boxes.forEach(box => this.observer!.observe(box));
  }

  ngOnDestroy(): void {
    if (this.observer) this.observer.disconnect();
  }

  public triggerAnimations(): void {
    const boxes = Array.from(this.el.nativeElement.querySelectorAll(`.${this.sectionClasses.animateBox}`)) as HTMLElement[];
    boxes.forEach(box => {
      this.renderer.removeClass(box, this.animationConfig.inViewClass);
      setTimeout(() => this.renderer.addClass(box, this.animationConfig.inViewClass), this.animationConfig.transitionDelay);
    });
  }

  public resetAnimations(): void {
    const boxes = Array.from(this.el.nativeElement.querySelectorAll(`.${this.sectionClasses.animateBox}`)) as HTMLElement[];
    boxes.forEach(box => this.renderer.removeClass(box, this.animationConfig.inViewClass));
  }

  onServiceButtonClick(service: ServiceItem): void {
    console.log(`Learn more clicked for: ${service.content.title}`);
  }

  onServiceImageClick(service: ServiceItem): void {
    console.log(`Image clicked for: ${service.content.title}`);
  }
}
