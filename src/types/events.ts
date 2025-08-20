export interface Event {
  id: string;
  name: string;
  date: Date;
  createdAt: Date;
}

export interface EventFormData {
  name: string;
  date: Date;
}

export interface EventStore {
  events: Event[];
  searchQuery: string;
  addEvent: (event: EventFormData) => void;
  deleteEvent: (id: string) => void;
  setSearchQuery: (query: string) => void;
}
