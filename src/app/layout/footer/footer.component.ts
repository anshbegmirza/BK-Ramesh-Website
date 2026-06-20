import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_CONFIG } from '../../data/site.config';
import { MAIN_NAV_LINKS } from '../../data/nav-links.data';

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

  quickLinks = MAIN_NAV_LINKS;
}
