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
    const boxes = Array.from(this.el.nativeElement.querySelectorAll('.animate-box')) as HTMLElement[];

    // set a small stagger via inline transition-delay to make entrance look pleasing
    boxes.forEach((box, idx) => {
      // small stagger — adjust multiplier (100) to taste
      this.renderer.setStyle(box, 'transitionDelay', `${idx * 120}ms`);
    });

    // IntersectionObserver options
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px 0px -10% 0px', // trigger a bit before element fully in view
      threshold: 0.12 // triggers when ~12% visible
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const target = entry.target as HTMLElement;

        if (entry.isIntersecting) {
          // double RAF ensures browser has applied initial styles
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              this.renderer.addClass(target, 'in-view');
            });
          });
        } else {
          // remove class when leaving viewport so animation replays on re-enter
          this.renderer.removeClass(target, 'in-view');
        }
      });
    }, options);

    // observe each box
    boxes.forEach(box => this.observer!.observe(box));
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
}
