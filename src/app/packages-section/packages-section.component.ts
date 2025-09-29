import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import packagesData from '../constants/packages-section.json';

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
export class PackagesSectionComponent implements OnInit {
  
  content!: PageContent;
  topPackages: Package[] = [];
  bottomPackages: Package[] = [];

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.content = packagesData.content;
    this.topPackages = packagesData.topPackages;
    this.bottomPackages = packagesData.bottomPackages;
  }
}
