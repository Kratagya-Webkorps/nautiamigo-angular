import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-promo-video',
  templateUrl: './video-banner.component.html',
  styleUrls: ['./video-banner.component.css'],
  standalone: true,
  imports: [NgIf],
})
export class PromoVideoComponent {
  isVideoOpen = false;

  openVideo() {
    this.isVideoOpen = true;
  }

  closeVideo() {
    this.isVideoOpen = false;
  }
}
