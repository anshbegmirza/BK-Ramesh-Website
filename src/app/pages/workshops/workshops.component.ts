import { Component, inject, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { ServiceCardComponent } from '../../shared/components/service-card/service-card.component';
import { COACHING_SERVICES } from '../../data/services.data';
import { UPCOMING_WORKSHOPS } from '../../data/workshops.data';
import { SITE_CONFIG } from '../../data/site.config';
import { CoachingService } from '../../core/models/service.model';

@Component({
  selector: 'app-workshops',
  standalone: true,
  imports: [
    NgOptimizedImage,
    SectionHeadingComponent,
    ServiceCardComponent,
  ],
  templateUrl: './workshops.component.html',
  styleUrl: './workshops.component.scss',
})
export class WorkshopsComponent implements OnInit {
  seo = inject(SeoService);

  site = SITE_CONFIG;
  services = [
    ...COACHING_SERVICES.filter((service) => service.featured),
    ...COACHING_SERVICES.filter((service) => !service.featured),
  ];
  workshops = UPCOMING_WORKSHOPS;
  expandedId: string | null = null;

  ngOnInit() {
    this.seo.update({
      title: 'Workshops & Services',
      description:
        'Explore NLP coaching, mindset transformation, emotional healing, Perfect Woman training, and upcoming workshops by BK Ramesh.',
      keywords: 'NLP workshops, coaching services, Perfect Woman training, seminars, BK Ramesh',
      path: '/workshops',
    });
  }

  toggleAccordion(service: CoachingService) {
    this.expandedId = this.expandedId === service.id ? null : service.id;
  }
}
