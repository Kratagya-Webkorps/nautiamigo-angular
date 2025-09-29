import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


import content from '../../constants/footer.json';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  redirectTo(url: string) {
    window.location.href = url;
  }

  aboutTitle = content.aboutTitle;
  aboutText = content.aboutText;

  languages = content.languages;

  exploreTitle = content.exploreTitle;
  exploreLinks = content.exploreLinks;

  contactTitle = content.contactTitle;
  contactAddress = content.contactAddress;
  contactPhone = content.contactPhone;
  contactEmail = content.contactEmail;

  socialLinks = content.socialLinks;

  copyRight = content.copyRight;
  copyRightUrl = content.copyRightUrl;
  copyRightText = content.copyRightText;

  callUsTitle = content.callUsTitle;
  whatsappTitle = content.whatsappTitle;
}
