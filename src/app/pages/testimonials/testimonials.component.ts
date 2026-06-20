import { Component, inject, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { SeoService } from '../../core/services/seo.service';
import { TESTIMONIALS } from '../../data/testimonials.data';
import { GALLERY_IMAGES } from '../../data/gallery.data';
import { GalleryShowcaseComponent } from '../../shared/components/gallery-showcase/gallery-showcase.component';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [NgOptimizedImage, GalleryShowcaseComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent implements OnInit {
  seo = inject(SeoService);

  testimonials = TESTIMONIALS;
  galleryImages = GALLERY_IMAGES;

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
