import { Component, inject, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { SeoService } from '../../core/services/seo.service';
import { TESTIMONIALS } from '../../data/testimonials.data';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent implements OnInit {
  seo = inject(SeoService);

  testimonials = TESTIMONIALS;

  ngOnInit() {
    this.seo.update({
      title: 'Client Testimonials',
      description:
        'Read what clients say about NLP coaching and workshops with BK Ramesh — real stories of transformation and growth.',
      keywords: 'testimonials, client reviews, NLP coaching results, BK Ramesh reviews',
      path: '/testimonials',
    });
  }
}
