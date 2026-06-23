export interface NavLink {
  label: string;
  path: string;
  icon: string;
}

export const MAIN_NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/', icon: 'bi-house' },
  { label: 'About', path: '/about', icon: 'bi-person' },
  { label: 'Workshops', path: '/workshops', icon: 'bi-calendar-event' },
  { label: 'Testimonials', path: '/testimonials', icon: 'bi-chat-quote' },
  // { label: 'Register', path: '/register', icon: 'bi-camera-video' },
  { label: 'Contact', path: '/contact', icon: 'bi-envelope' },
];
