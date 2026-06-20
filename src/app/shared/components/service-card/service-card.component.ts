import { Component, Input } from '@angular/core';
import { CoachingService } from '../../../core/models/service.model';

@Component({
  selector: 'app-service-card',
  standalone: true,
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss',
})
export class ServiceCardComponent {
  @Input({ required: true }) service!: CoachingService;
  @Input() compact = false;
}
