import { WorkshopEvent } from '../core/models/workshop.model';

export const UPCOMING_WORKSHOPS: WorkshopEvent[] = [
  {
    id: 'perfect-woman-jul',
    title: 'Perfect Woman — Personality Development Training',
    date: '2026-07-12',
    time: '10:00 AM – 1:00 PM IST',
    mode: 'online',
    seats: 30,
    location: 'Zoom',
  },
  {
    id: 'nlp-intro-aug',
    title: 'Introduction to NLP — Transform Your Mindset',
    date: '2026-08-02',
    time: '6:00 PM – 8:00 PM IST',
    mode: 'online',
    seats: 50,
    location: 'Zoom',
  },
  {
    id: 'human-values-sep',
    title: 'Human Values & Inner Peace Seminar',
    date: '2026-09-14',
    time: '9:00 AM – 12:00 PM IST',
    mode: 'offline',
    seats: 40,
    location: 'To be announced',
  },
];

export const WORKSHOP_OPTIONS = [
  { value: 'perfect-woman', label: 'Perfect Woman — Personality Development' },
  { value: 'nlp-intro', label: 'Introduction to NLP' },
  { value: 'human-values', label: 'Human Values Seminar' },
  { value: 'full-nlp', label: 'Full NLP Course' },
  { value: 'relationship', label: 'Relationship Coaching Workshop' },
  { value: 'other', label: 'Other / General Inquiry' },
];

export const BATCH_OPTIONS = [
  { value: 'morning', label: 'Morning Batch' },
  { value: 'evening', label: 'Evening Batch' },
  { value: 'weekend', label: 'Weekend Batch' },
  { value: 'flexible', label: 'Flexible — Any Available' },
];
