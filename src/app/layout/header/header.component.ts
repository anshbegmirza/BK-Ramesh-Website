import { Component, HostListener, inject, OnDestroy, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../core/services/theme.service';
import { SITE_CONFIG } from '../../data/site.config';
import { MAIN_NAV_LINKS } from '../../data/nav-links.data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  site = SITE_CONFIG;
  menuOpen = false;
  isScrolled = false;
  isLightTheme = true;
  themeButtonLabel = 'Light mode. Switch to dark mode.';

  navLinks = MAIN_NAV_LINKS;

  themeSubscription?: Subscription;

  themeService = inject(ThemeService);

  ngOnInit() {
    this.syncThemeUi();
    this.updateScrollState();
    this.themeSubscription = this.themeService.themeChanged$.subscribe(() => this.syncThemeUi());
  }

  ngOnDestroy() {
    this.themeSubscription?.unsubscribe();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.updateScrollState();
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

  private updateScrollState() {
    this.isScrolled = window.scrollY > 8;
  }

  private syncThemeUi() {
    this.isLightTheme = this.themeService.isLightTheme();
    this.themeButtonLabel = this.isLightTheme
      ? 'Light mode. Switch to dark mode.'
      : 'Dark mode. Switch to light mode.';
  }
}
