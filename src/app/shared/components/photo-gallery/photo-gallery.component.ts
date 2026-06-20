import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { GalleryImage } from '../../../core/models/gallery.model';

@Component({
  selector: 'app-photo-gallery',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './photo-gallery.component.html',
  styleUrl: './photo-gallery.component.scss',
})
export class PhotoGalleryComponent {
  @Input({ required: true }) images!: GalleryImage[];
  @Input() animate = false;
}
