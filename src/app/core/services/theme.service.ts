import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { Subject } from 'rxjs';

export type ThemePreference = 'light' | 'dark' | 'auto';
export type ResolvedTheme = 'light' | 'dark';

const MODE_STORAGE_KEY = 'vbl-theme-mode';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  document = inject(DOCUMENT);
  platformId = inject(PLATFORM_ID);

  modeValue: ThemePreference = 'auto';
  themeValue: ResolvedTheme = 'light';

  themeChanged = new Subject<void>();
  readonly themeChanged$ = this.themeChanged.asObservable();

  prefersDark: MediaQueryList | null = null;
  private readonly onSystemThemeChange = () => {
    if (this.modeValue === 'auto') {
      this.applyResolvedTheme(this.resolveSystemTheme());
    }
  };

  init() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const stored = localStorage.getItem(MODE_STORAGE_KEY) as ThemePreference | null;
    this.modeValue =
      stored === 'light' || stored === 'dark' || stored === 'auto' ? stored : 'auto';

    this.prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.prefersDark.addEventListener('change', this.onSystemThemeChange);
    this.syncDocumentTheme();
  }

  getTheme() {
    return this.themeValue;
  }

  isLightTheme() {
    return this.themeValue === 'light';
  }

  toggle() {
    const next: ResolvedTheme = this.themeValue === 'light' ? 'dark' : 'light';
    this.setMode(next);
  }

  setMode(mode: ThemePreference) {
    this.modeValue = mode;
    localStorage.setItem(MODE_STORAGE_KEY, mode);
    this.syncDocumentTheme();
  }

  private syncDocumentTheme() {
    const resolved: ResolvedTheme =
      this.modeValue === 'auto' ? this.resolveSystemTheme() : this.modeValue;
    this.applyResolvedTheme(resolved);
  }

  private applyResolvedTheme(resolved: ResolvedTheme) {
    this.themeValue = resolved;
    this.document.documentElement.setAttribute('data-theme', resolved);
    this.themeChanged.next();
  }

  private resolveSystemTheme() {
    return this.prefersDark?.matches ?? window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }
}
