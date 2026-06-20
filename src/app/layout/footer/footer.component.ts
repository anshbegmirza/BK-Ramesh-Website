import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_CONFIG } from '../../data/site.config';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  site = SITE_CONFIG;
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'About', path: '/about' },
    { label: 'Workshops & Events', path: '/workshops' },
    { label: 'Register on Zoom', path: '/register' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Contact', path: '/contact' },
  ];
}
