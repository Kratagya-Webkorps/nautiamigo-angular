import { Component, HostListener, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() transparent = false;
  isHero = false;
  atTop = true; 

  constructor(private router: Router) {
    this.isHero = this.isHeroUrl(this.router.url);

    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.isHero = this.isHeroUrl(evt.urlAfterRedirects || evt.url);
      }
    });
  }

  private isHeroUrl(url: string): boolean {
    return url === '/' || url === '';
  }

  // detect scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.atTop = window.scrollY < 50; 
  }
}
