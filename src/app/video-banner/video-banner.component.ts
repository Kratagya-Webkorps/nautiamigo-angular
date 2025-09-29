import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import videoConfig from '../constants/video-banner.json';

interface VideoSectionConfig {
  backgroundImage: string;
  starRating: {
    count: number;
    iconClass: string;
  };
  subtitle: string;
  title: string;
  playButton: {
    iconClass: string;
  };
  video: {
    source: string;
    type: string;
    fallbackMessage: string;
  };
  modal: {
    closeButtonText: string;
  };
}

@Component({
  selector: 'app-promo-video',
  templateUrl: './video-banner.component.html',
  styleUrls: ['./video-banner.component.css'],
  standalone: true,
  imports: [NgFor, NgIf],
})
export class PromoVideoComponent {
  isVideoOpen = false;

  config: VideoSectionConfig = videoConfig;

  get starArray(): number[] {
    return Array(this.config.starRating.count).fill(0).map((_, i) => i);
  }

  openVideo() {
    this.isVideoOpen = true;
  }

  closeVideo() {
    this.isVideoOpen = false;
  }
}
