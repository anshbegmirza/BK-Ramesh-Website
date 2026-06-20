import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SeoMeta } from '../models/seo.model';
import { SITE_CONFIG } from '../../data/site.config';

@Injectable({ providedIn: 'root' })
export class SeoService {
  title = inject(Title);
  meta = inject(Meta);
  document = inject(DOCUMENT);

  update(meta: SeoMeta) {
    const fullTitle = meta.title.includes(SITE_CONFIG.shortName)
      ? meta.title
      : `${meta.title} | ${SITE_CONFIG.brandName}`;

    this.title.setTitle(fullTitle);
    this.meta.updateTag({ name: 'description', content: meta.description });

    if (meta.keywords) {
      this.meta.updateTag({ name: 'keywords', content: meta.keywords });
    }

    const url = meta.path ? `${SITE_CONFIG.domain}${meta.path}` : SITE_CONFIG.domain;
    const ogImage = meta.ogImage ?? `${SITE_CONFIG.domain}/images/og-default.svg`;

    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: meta.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:image', content: ogImage });
    this.meta.updateTag({ property: 'og:site_name', content: SITE_CONFIG.brandName });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: meta.description });
    this.meta.updateTag({ name: 'twitter:image', content: ogImage });

    this.updateCanonical(url);
  }

  private updateCanonical(url: string) {
    let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }
}
