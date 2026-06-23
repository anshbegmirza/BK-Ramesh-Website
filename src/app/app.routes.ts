import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
        title: 'Home',
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
        title: 'About',
      },
      {
        path: 'workshops',
        loadComponent: () =>
          import('./pages/workshops/workshops.component').then(m => m.WorkshopsComponent),
        title: 'Workshops',
      },
      // {
      //   path: 'register',
      //   loadComponent: () =>
      //     import('./pages/register/register.component').then(m => m.RegisterComponent),
      //   title: 'Register',
      // },
      {
        path: 'testimonials',
        loadComponent: () =>
          import('./pages/testimonials/testimonials.component').then(m => m.TestimonialsComponent),
        title: 'Testimonials',
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./pages/contact/contact.component').then(m => m.ContactComponent),
        title: 'Contact',
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];
