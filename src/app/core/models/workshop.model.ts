export interface WorkshopEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  mode: 'online' | 'offline';
  seats: number;
  location?: string;
}
