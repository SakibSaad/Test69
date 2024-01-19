import { z } from "zod";

export const BlogSchema = z.object({
  title: z.string().min(3).max(255),
  summary: z.string().min(150).max(500),
  coverImageURL: z.string().min(8).max(255),
  slug: z.string().min(3).max(255).optional(),
  content: z.string().min(3).max(70000),
});

export type BlogPayload = z.infer<typeof BlogSchema>;

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().max(255),
});

export type LoginPayload = z.infer<typeof LoginSchema>;
