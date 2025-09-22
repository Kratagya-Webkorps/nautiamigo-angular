import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Package {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface PageContent {
  brandName: string;
  sectionTitle: string;
  bookButtonText: string;
  detailsText: string;
  phoneLink: string;
  whatsappLink: string;
  iconTitles: {
    dining: string;
    drinks: string;
    music: string;
    wifi: string;
  };
}

@Component({
  selector: 'app-packages-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './packages-section.component.html',
  styleUrl: './packages-section.component.css'
})
export class PackagesSectionComponent {
  
  // Page content 
  content: PageContent = {
    brandName: 'NAUTI AMIGO LUXURY CRUISE',
    sectionTitle: 'Our Packages',
    bookButtonText: 'BOOK',
    detailsText: 'Details',
    phoneLink: 'tel:+919324105081',
    whatsappLink: 'https://api.whatsapp.com/send/?phone=919324105081&text&type=phone_number&app_absent=0',
    iconTitles: {
      dining: 'Dining',
      drinks: 'Drinks',
      music: 'Music',
      wifi: 'Wi-Fi'
    }
  };

  topPackages: Package[] = [
    {
      id: 1,
      name: 'LUXURY DINNER CRUISE',
      price: '₹ 2499/person',
      image: '../../assets/images/4.jpeg'
    },
    {
      id: 2,
      name: 'VIP LUXURY DINNER CRUISE',
      price: '₹ 2999/person',
      image: '../../assets/images/7.jpeg'
    }
  ];

  bottomPackages: Package[] = [
    {
      id: 3,
      name: 'SUNSET CRUISE',
      price: '₹699/Person',
      image: '../../assets/images/1.jpeg'
    },
    {
      id: 4,
      name: 'LUNCH CRUISE',
      price: '₹2499/Person',
      image: '../../assets/images/2.jpeg'
    },
    {
      id: 5,
      name: 'PRIVATE BOAT PARTY',
      price: '₹14999/Person',
      image: '../../assets/images/3.jpeg'
    }
  ];
}