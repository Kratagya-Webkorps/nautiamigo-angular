import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Package {
  id: number;
  name: string;
  price: string;
  image: string;
}

@Component({
  selector: 'app-packages-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './packages-section.component.html',
  styleUrl: './packages-section.component.css'
})
export class PackagesSectionComponent {
  
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