import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import cruiseData from '../constants/cruise-packages.json';

interface TopFeature {
  icon: string;
  title: string;
  description: string;
}

interface MustKnow {
  about1: string;
}

interface Feature {
  name: string;
  image: string;
}

interface Highlight {
  highlights1: string;
}

interface Overview {
  inclusion1: string;
}

interface ThingToCarry {
  exclusion1: string;
}

interface NeedToKnow {
  needToKnow: string;
}

interface Transport {
  title: string;
  isSelected: boolean;
  originalamt: string;
  discountedamt: string;
  kidAmt: string;
  desc: string[];
}

interface CruiseOffer {
  cruiseId: number;
  title: string;
  category: string;
  routingUrl: string;
  rating: string;
  reviews: string;
  oldPrice: string;
  booked: string;
  buttonText: string;
  currentPrice: string;
  image: string;
  topFeatures: TopFeature[];
  mustKnow: MustKnow[];
  features: Feature[];
  highlights: Highlight[];
  overviewDesc: string;
  overview: Overview[];
  thingsToCarry: ThingToCarry[];
  needToKnows: NeedToKnow[];
  transport: Transport[];
  isLakhs?: (offer: CruiseOffer) => boolean; 
}

@Component({
  selector: 'app-cruise-packages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cruise-packages.component.html',
  styleUrls: ['./cruise-packages.component.css']
})
export class CruisePackagesComponent implements OnInit {


  constants = cruiseData.CRUISE_CONSTANTS;
  offers: CruiseOffer[] = cruiseData.offers;

  constructor() { }

  ngOnInit(): void {
  }

  isLakhs(offer: CruiseOffer): boolean {
    return /lakhs/i.test(offer.currentPrice); 
  }

  goToService(routingUrl: string): void {
    //console.log('Navigating to:', routingUrl);
  }

  openWhatsApp(phoneNumber: string): void {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`;
    window.open(whatsappUrl, '_blank');
  }

  callPhone(phoneNumber: string): void {
    window.location.href = `tel:${phoneNumber}`;
  }
}