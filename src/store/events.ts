import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Event, EventFormData, EventStore } from "@/types/events";

export const useEventStore = create<EventStore>()(
  persist(
    (set, get) => ({
      events: [],
      searchQuery: "",
      addEvent: (eventData: EventFormData) => {
        const newEvent: Event = {
          id: crypto.randomUUID(),
          ...eventData,
          createdAt: new Date(),
        };
        set((state) => {
          const newState = {
            events: [...state.events, newEvent],
          };
          return newState;
        });
      },
      deleteEvent: (id: string) => {
        set((state) => ({
          events: state.events.filter((event) => event.id !== id),
        }));
      },
      setSearchQuery: (query: string) => {
        set({ searchQuery: query });
      },
    }),
    {
      name: "event-storage",
      partialize: (state) => ({ events: state.events }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          // Convert date strings back to Date objects after rehydration
          state.events = state.events.map((event) => ({
            ...event,
            date: new Date(event.date),
            createdAt: new Date(event.createdAt),
          }));
        }
      },
    }
  )
);

export const useFilteredEvents = () => {
  const events = useEventStore((state) => state.events);
  const searchQuery = useEventStore((state) => state.searchQuery);

  const filtered = events
    .filter((event) =>
      event.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

  return filtered;
};
