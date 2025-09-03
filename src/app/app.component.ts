import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../app/components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import {HeroSectionComponent} from "./hero-section/hero-section.component"
import {AboutSectionComponent} from "./about-section/about-section.component"
import {BookingFormComponent} from "./booking-form/booking-form.component"
import {PackagesSectionComponent} from "./packages-section/packages-section.component"
import {ServicesSectionComponent} from "./services-section/services-section.component"
import {ReservationBookingComponent} from "./reservation-booking/reservation-booking.component"
import {TestimonialsComponent} from "./testimonials/testimonials.component"
import {AdditionalServicesComponent} from "./additional-services/additional-services.component"
import {EventsSectionComponent} from "./events-section/events-section.component"
import {CruisePackagesComponent} from "./cruise-packages/cruise-packages.component"
import {EventsSectionLatestComponent} from "./events-section-latest/events-section.component"

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, NavbarComponent,FooterComponent,HeroSectionComponent,AboutSectionComponent,PackagesSectionComponent,ServicesSectionComponent,ReservationBookingComponent,TestimonialsComponent,AdditionalServicesComponent,EventsSectionComponent,CruisePackagesComponent,EventsSectionLatestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nautiamigo';
}
