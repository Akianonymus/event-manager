"use client";

import { format } from "date-fns";
import { Trash2 } from "lucide-react";
import { useEventStore, useFilteredEvents } from "@/store/events";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function EventList() {
  const filteredEvents = useFilteredEvents();
  const deleteEvent = useEventStore((state) => state.deleteEvent);

  if (filteredEvents.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-8">
        No events found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {filteredEvents.map((event) => (
        <Card key={event.id}>
          <CardHeader className="px-6">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">
                {event.name}
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => deleteEvent(event.id)}
                className="text-destructive hover:text-destructive/90"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="px-6">
            <p className="text-sm text-muted-foreground">
              {format(new Date(event.date), "PPP")}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
