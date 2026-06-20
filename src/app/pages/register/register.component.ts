import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SeoService } from '../../core/services/seo.service';
import { BATCH_OPTIONS, WORKSHOP_OPTIONS } from '../../data/workshops.data';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  seo = inject(SeoService);
  fb = inject(FormBuilder);

  workshopOptions = WORKSHOP_OPTIONS;
  batchOptions = BATCH_OPTIONS;
  submitted = false;
  submitSuccess = false;

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[\d\s+\-()]{10,15}$/)]],
    workshop: ['', Validators.required],
    batch: ['', Validators.required],
    message: [''],
  });

  ngOnInit() {
    this.seo.update({
      title: 'Register on Zoom',
      description:
        'Register for NLP workshops and coaching sessions with BK Ramesh. Choose your workshop and preferred batch.',
      keywords: 'register workshop, Zoom registration, NLP course signup, BK Ramesh',
      path: '/register',
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log('Registration submitted:', this.form.value);
    this.submitSuccess = true;
    this.form.reset();
    this.submitted = false;
  }
}
