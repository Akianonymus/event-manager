import { EventForm } from "@/components/events/EventForm";
import { EventList } from "@/components/events/EventList";
import { EventSearch } from "@/components/events/EventSearch";

export default function EventsPage() {
  return (
    <div className="container flex flex-col justify-center items-center py-8 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Event Manager</h1>
        <p className="text-muted-foreground">Create and manage your events</p>
      </div>

      <div className="flex justify-center w-full gap-4 max-w-5xl">
        <EventForm />
        <div className="flex-grow max-w-0.5 border border-gray-500 border-solid"></div>
        <div className="flex flex-col gap-4">
          <EventSearch />
          <EventList />
        </div>
      </div>
    </div>
  );
}
