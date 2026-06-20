import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GalleryImage } from '../../../core/models/gallery.model';
import { PhotoGalleryComponent } from '../photo-gallery/photo-gallery.component';

@Component({
  selector: 'app-gallery-showcase',
  standalone: true,
  imports: [RouterLink, PhotoGalleryComponent],
  templateUrl: './gallery-showcase.component.html',
  styleUrl: './gallery-showcase.component.scss',
})
export class GalleryShowcaseComponent {
  @Input({ required: true }) images!: GalleryImage[];
  @Input({ required: true }) eyebrow!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
  @Input() ctaLabel = '';
  @Input() ctaLink = '';
}
