import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SeoService } from '../../core/services/seo.service';
import { buildWhatsappUrl, SITE_CONFIG } from '../../data/site.config';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  seo = inject(SeoService);
  fb = inject(FormBuilder);

  site = SITE_CONFIG;
  whatsappUrl = buildWhatsappUrl();
  submitted = false;
  submitSuccess = false;

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    subject: ['', [Validators.required, Validators.minLength(5)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  ngOnInit() {
    this.seo.update({
      title: 'Contact & WhatsApp',
      description:
        'Get in touch with BK Ramesh for NLP coaching inquiries. Contact form, WhatsApp, email, and social links.',
      keywords:
        'contact BK Ramesh, WhatsApp coaching, NLP inquiry, life coach contact',
      path: '/contact',
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    const { name, subject, message } = this.form.getRawValue();
    const whatsappMessage = [
      'Hello *BK Ramesh*,',
      '',
      `*Name:* ${name}`,
      `*Subject:* ${subject}`,
      '',
      '*Message:*',
      message?.trim() ?? '',
    ].join('\n');
    const whatsappUrl = buildWhatsappUrl(whatsappMessage);

    window.open(whatsappUrl, '_blank');

    this.submitSuccess = true;
    this.form.reset();
    this.submitted = false;

    setTimeout(() => {
      this.submitSuccess = false;
    }, 3000);
  }
}
