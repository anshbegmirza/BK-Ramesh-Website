import { Component } from '@angular/core';
import { buildWhatsappUrl } from '../../../data/site.config';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.scss',
})
export class WhatsappButtonComponent {
  whatsappUrl = buildWhatsappUrl();
}
