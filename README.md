# Event Manager

A simple event management application built with Next.js that allows users to create, view, and manage events with a clean, responsive interface.

## Features

- **Event Creation**: Add new events with name and date using a form with validation
- **Event Management**: View all events in a responsive grid layout
- **Search Functionality**: Filter events by name using the search bar
- **Data Persistence**: Events are automatically saved to localStorage and persist between sessions
- **Responsive Design**: Mobile-friendly interface that works across all device sizes
- **Real-time Updates**: Events appear immediately after creation without page refresh

## Technology Stack

- **Frontend Framework**: Next.js 14 with App Router
- **State Management**: Zustand for client-side state with localStorage persistence
- **Form Handling**: React Hook Form with Zod validation
- **UI Components**: shadcn/ui component library
- **Styling**: Tailwind CSS for responsive design
- **Type Safety**: Full TypeScript implementation with strict typing

## Project Structure

```
src/
├── app/
│   └── events/
│       └── page.tsx          # Events page route
├── components/
│   └── events/
│       ├── EventForm.tsx     # Event creation form
│       ├── EventList.tsx     # Events display grid
│       └── EventSearch.tsx   # Search functionality
├── store/
│   └── events.ts             # Zustand store with persistence
├── types/
│   └── events.ts             # TypeScript interfaces
└── lib/
    └── schemas/
        └── event.ts          # Zod validation schemas
```

## Getting Started

1. Install dependencies:

pnpm install

2. Run the development server:

```bash
pnpm run dev
# or
pnpm dev
```

3. Open [http://localhost:3000/events](http://localhost:3000/events) in your browser

## How It Works

The application uses a client-side architecture with the following key components:

**State Management**: Zustand store manages event data with automatic localStorage persistence. The store handles CRUD operations and search state, with a custom selector hook for filtered events.

**Form Validation**: React Hook Form integrates with Zod schemas to validate event input. The form includes a custom date picker component that prevents selecting past dates.

**Component Architecture**: Clean separation of concerns with dedicated components for form handling, event display, and search functionality. All components use shadcn/ui for consistent styling and accessibility.

**Data Flow**: When a user submits the form, the event is added to the Zustand store, which triggers a re-render of the EventList component. The search functionality filters events in real-time as the user types.

**Persistence**: The Zustand persist middleware automatically saves events to localStorage and handles date object serialization/deserialization to maintain data integrity across browser sessions.
