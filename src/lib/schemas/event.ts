import { z } from "zod";

export const eventFormSchema = z.object({
  name: z.string().min(1, "Event name is required"),
  date: z.date({
    message: "Event date is required",
  }),
});

export type EventFormSchema = z.infer<typeof eventFormSchema>;
