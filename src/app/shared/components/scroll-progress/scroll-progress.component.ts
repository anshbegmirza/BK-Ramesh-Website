import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  templateUrl: './scroll-progress.component.html',
  styleUrl: './scroll-progress.component.scss',
})
export class ScrollProgressComponent implements OnInit {
  progress = 0;
  reducedMotion = false;

  private ticking = false;

  ngOnInit() {
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.updateProgress();
  }

  @HostListener('window:scroll')
  onScroll() {
    if (this.ticking) {
      return;
    }

    this.ticking = true;
    requestAnimationFrame(() => {
      this.updateProgress();
      this.ticking = false;
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.updateProgress();
  }

  private updateProgress() {
    const docHeight: number = document.documentElement.scrollHeight - window.innerHeight;
    this.progress = docHeight > 0 ? Math.min(100, (window.scrollY / docHeight) * 100) : 0;
  }
}
