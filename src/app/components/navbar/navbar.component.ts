import { Component, HostListener, Input, AfterViewInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import content from '../../constants/navbar.json';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  @Input() transparent = false;
  atTop = true;

  private observer?: IntersectionObserver;

  logoAlt = content.logoAlt;
  phoneNumber = content.phoneNumber;
  navigationItems = content.navigationItems;

  constructor(private router: Router, private cd: ChangeDetectorRef) {
   
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        
        setTimeout(() => this.updateAtTop(), 30);
      }
    });
  }

  ngAfterViewInit() {
    
    this.updateAtTop();

    
    const hero = document.getElementById('hero');
    if (hero && 'IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            this.atTop = entry.intersectionRatio > 0;
            this.cd.detectChanges();
          });
        },
        { root: null, threshold: [0, 0.01, 0.5, 1] }
      );
      this.observer.observe(hero);
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {  
    this.updateAtTop();
  }

  private updateAtTop() {
    const scrollTop = 
    window.pageYOffset 
      || document.documentElement.scrollTop 
      || document.body.scrollTop 
      || 0;
  
    this.atTop = scrollTop < 50;
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  onPhoneClick(): void {
    window.location.href = `tel:${this.phoneNumber}`;
  }
}
