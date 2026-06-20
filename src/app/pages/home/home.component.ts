import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe, NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import { SeoService } from '../../core/services/seo.service';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { ServiceCardComponent } from '../../shared/components/service-card/service-card.component';
import { COACHING_SERVICES } from '../../data/services.data';
import { TESTIMONIALS } from '../../data/testimonials.data';
import { UPCOMING_WORKSHOPS } from '../../data/workshops.data';
import { SITE_CONFIG } from '../../data/site.config';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, DatePipe, TitleCasePipe, NgOptimizedImage, SectionHeadingComponent, ServiceCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  seo = inject(SeoService);
  testimonialTimer?: Subscription;

  site = SITE_CONFIG;
  services = COACHING_SERVICES.slice(0, 6);
  testimonials = TESTIMONIALS.slice(0, 3);
  upcomingWorkshop = UPCOMING_WORKSHOPS[0];
  activeTestimonial = 0;

  ngOnInit() {
    this.seo.update({
      title: `${SITE_CONFIG.tagline} — NLP & Life Coaching`,
      description:
        'Transform your mind and life with NLP & Life Coaching by BK Ramesh. Confidence building, self-image transformation, emotional healing, and workshops.',
      keywords: 'NLP coaching, life coaching, BK Ramesh, self improvement, mindset transformation, workshops',
      path: '/',
    });

    this.testimonialTimer = interval(6000).subscribe(() => this.nextTestimonial());
  }

  ngOnDestroy() {
    this.testimonialTimer?.unsubscribe();
  }

  prevTestimonial() {
    const max = this.testimonials.length - 1;
    this.activeTestimonial = this.activeTestimonial === 0 ? max : this.activeTestimonial - 1;
  }

  nextTestimonial() {
    const max = this.testimonials.length - 1;
    this.activeTestimonial = this.activeTestimonial === max ? 0 : this.activeTestimonial + 1;
  }
}
