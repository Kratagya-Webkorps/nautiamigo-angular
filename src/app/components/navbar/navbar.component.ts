import { Component, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  @Input() transparent = false;

  
  isHero = false;

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
}

