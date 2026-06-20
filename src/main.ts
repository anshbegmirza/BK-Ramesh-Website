import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ThemeService } from './app/core/services/theme.service';

bootstrapApplication(AppComponent, appConfig)
  .then(appRef => appRef.injector.get(ThemeService).init())
  .catch(err => console.error(err));
