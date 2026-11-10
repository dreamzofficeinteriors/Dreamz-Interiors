import { z } from "zod";

export const callbackFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(80, "Name exceeds maximum length"),
  phone: z
    .string()
    .trim()
    .regex(
      /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,15}$/,
      "Please enter a valid phone number with area/country code"
    ),
  company: z
    .string()
    .trim()
    .min(2, "Company or organization name is required")
    .max(100, "Company name exceeds maximum length"),
  projectType: z.enum(
    ["commercial-furniture", "modular", "turnkey", "not-sure"],
    {
      errorMap: () => ({ message: "Please select a valid project scope" }),
    }
  ),
  city: z
    .string()
    .trim()
    .min(2, "City / location is required")
    .max(60, "City name exceeds maximum length"),
  brief: z
    .string()
    .trim()
    .max(1000, "Brief must be under 1000 characters")
    .optional()
    .or(z.literal("")),
  consent: z.literal(true, {
    errorMap: () => ({
      message: "Please agree to be contacted regarding your workspace inquiry",
    }),
  }),
  // Honeypot field to trap spambots
  website_trap: z.string().max(0, "Bot detected").optional(),
});

export type CallbackFormData = z.infer<typeof callbackFormSchema>;

