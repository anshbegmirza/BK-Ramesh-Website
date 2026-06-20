import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { WhatsappButtonComponent } from '../../shared/components/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, WhatsappButtonComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent implements AfterViewInit, OnDestroy {
  ngAfterViewInit() {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 40,
      disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    });
  }

  ngOnDestroy() {
    AOS.refreshHard();
  }
}
