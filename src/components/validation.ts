import { z } from "zod";

export const appointmentSchema = z
  .object({
    name: z.string().min(1, "Name is required"),

    email: z
      .string()
      .trim()
      .email("Please enter a valid email address")
      .optional()
      .or(z.literal("")),
    
    phone: z
      .string()
      .trim()
      .optional()
      .or(z.literal(""))
      .refine(
        (val) => !val || /^\+\d{7,15}$/.test(val),
        "Please enter a valid phone number with country code (e.g. +61...)"
      ),

    date: z.string().min(1, "Date is required"),
    time: z.string().min(1, "Time is required"),

    services: z
      .array(z.string())
      .min(1, "Please select at least one service"),
  })
  .refine((data) => data.email || data.phone, {
    message: "Please provide either an email or phone number",
    path: ["email"],
  });

export type AppointmentFormData = z.infer<typeof appointmentSchema>;
