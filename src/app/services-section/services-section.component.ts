import { Component, AfterViewInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.css']
})
export class ServicesSectionComponent implements AfterViewInit, OnDestroy {
  private observer: IntersectionObserver | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {

    setTimeout(() => {
      this.initializeAnimations();
    }, 100);
  }

  private initializeAnimations(): void {
    const boxes = Array.from(this.el.nativeElement.querySelectorAll('.animate-box')) as HTMLElement[];

    if (boxes.length === 0) {
      console.warn('No animate-box elements found');
      return;
    }

    
    boxes.forEach((box, idx) => {
      this.renderer.setStyle(box, 'transition-delay', `${idx * 150}ms`);
    });

    
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px 0px -20% 0px', 
      threshold: 0.1 
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const target = entry.target as HTMLElement;

        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            this.renderer.addClass(target, 'in-view');
            this.observer!.unobserve(target); 
          });
        }
      });
    }, options);

    boxes.forEach(box => {
      this.observer!.observe(box);
      console.log('Observing element:', box); 
    });

    console.log(`Initialized animation for ${boxes.length} elements`); 
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }

  public triggerAnimations(): void {
    const boxes = Array.from(this.el.nativeElement.querySelectorAll('.animate-box')) as HTMLElement[];
    boxes.forEach(box => {
      this.renderer.removeClass(box, 'in-view');
      setTimeout(() => {
        this.renderer.addClass(box, 'in-view');
      }, 100);
    });
  }

  public resetAnimations(): void {
    const boxes = Array.from(this.el.nativeElement.querySelectorAll('.animate-box')) as HTMLElement[];
    boxes.forEach(box => {
      this.renderer.removeClass(box, 'in-view');
    });
  }
}