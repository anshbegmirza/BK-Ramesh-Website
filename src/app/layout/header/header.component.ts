import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../core/services/theme.service';
import { SITE_CONFIG } from '../../data/site.config';

interface NavLink {
  label: string;
  path: string;
  icon: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  site = SITE_CONFIG;
  menuOpen = false;
  isLightTheme = true;
  themeButtonLabel = 'Light mode. Switch to dark mode.';

  navLinks: NavLink[] = [
    { label: 'Home', path: '/', icon: 'bi-house' },
    { label: 'About', path: '/about', icon: 'bi-person' },
    { label: 'Workshops', path: '/workshops', icon: 'bi-calendar-event' },
    { label: 'Testimonials', path: '/testimonials', icon: 'bi-chat-quote' },
    { label: 'Register', path: '/register', icon: 'bi-camera-video' },
    { label: 'Contact', path: '/contact', icon: 'bi-envelope' },
  ];

  themeSubscription?: Subscription;

  themeService = inject(ThemeService);

  ngOnInit() {
    this.syncThemeUi();
    this.themeSubscription = this.themeService.themeChanged$.subscribe(() => this.syncThemeUi());
  }

  ngOnDestroy() {
    this.themeSubscription?.unsubscribe();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  toggleTheme() {
    this.themeService.toggle();
    this.syncThemeUi();
  }

  private syncThemeUi() {
    this.isLightTheme = this.themeService.isLightTheme();
    this.themeButtonLabel = this.isLightTheme
      ? 'Light mode. Switch to dark mode.'
      : 'Dark mode. Switch to light mode.';
  }
}
