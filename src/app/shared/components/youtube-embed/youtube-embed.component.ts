import { Component, inject, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {
  buildYoutubeEmbedUrl,
  getYoutubeVideoId,
  isYoutubeShort,
} from '../../../core/utils/youtube.util';

@Component({
  selector: 'app-youtube-embed',
  standalone: true,
  templateUrl: './youtube-embed.component.html',
  styleUrl: './youtube-embed.component.scss',
})
export class YoutubeEmbedComponent implements OnChanges {
  private sanitizer = inject(DomSanitizer);

  @Input({ required: true }) url!: string;
  @Input() title = 'YouTube video';
  @Input() autoplay = true;
  @Input() loop = true;

  embedUrl?: SafeResourceUrl;
  isShort = false;

  ngOnChanges() {
    const videoId: string | null = getYoutubeVideoId(this.url);
    if (!videoId) {
      return;
    }

    this.isShort = isYoutubeShort(this.url);
    const rawUrl: string = buildYoutubeEmbedUrl(videoId, {
      autoplay: this.autoplay,
      loop: this.loop,
    });
    this.embedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(rawUrl);
  }
}
