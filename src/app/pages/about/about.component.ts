import { Component, inject, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { SeoService } from '../../core/services/seo.service';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { SITE_CONFIG } from '../../data/site.config';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgOptimizedImage, SectionHeadingComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  seo = inject(SeoService);

  focusAreas = [
    { icon: 'bi-shield-check', label: 'Confidence building' },
    { icon: 'bi-person-hearts', label: 'Self-image transformation' },
    { icon: 'bi-heart-pulse', label: 'Emotional healing' },
    { icon: 'bi-brightness-high', label: 'Mindset coaching' },
    { icon: 'bi-people', label: 'Relationship clarity' },
  ];

  timeline = [
    {
      year: 'Spiritual Foundation',
      title: 'Brahma Kumaris',
      description:
        'Connected with Brahma Kumaris, a spiritual organization, and felt called to serve people across all walks of life.',
    },
    {
      year: 'Discovery',
      title: 'Introduction to NLP',
      description:
        'Discovered Neuro-Linguistic Programming — a powerful toolkit for understanding and transforming human behaviour.',
    },
    {
      year: '7+ Years',
      title: 'Transforming Lives',
      description:
        'Has been changing people\'s lives through NLP coaching, helping clients overcome depression, anxiety, career blocks, and relationship challenges.',
    },
    {
      year: 'Flagship Program',
      title: 'Perfect Woman Training',
      description:
        'Developed the beloved Personality Development Training for the Perfect Woman — empowering women to build confidence and understand the true value of their lives.',
    },
  ];

  ngOnInit() {
    this.seo.update({
      title: 'About BK Ramesh',
      description:
        'Learn about BK Ramesh — NLP & Life Coach with 7+ years of experience. Spiritual foundation with Brahma Kumaris, expert in confidence, self-image, and emotional healing.',
      keywords: 'BK Ramesh, about, NLP coach, Brahma Kumaris, life coaching India',
      path: '/about',
    });
  }
}
