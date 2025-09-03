import { Component } from '@angular/core';

@Component({
  selector: 'app-promo-video',
  templateUrl: './video-banner.component.html',
  styleUrls: ['./video-banner.component.css']
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
