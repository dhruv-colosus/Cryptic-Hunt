import { z } from "zod";

export const registerPostObjSchema = z.object({
  username: z.string().max(255).min(3),
  name: z.string().max(255).min(3),
  email: z.string().email(),
  password: z.string().max(255).min(8),
});

export const createUserSchema = z.object({
  _id: z.string(),
  name: z.string(),
  email: z.string(),
  isAdmin: z.boolean(),
  username: z.string(),
  level: z.number(),
  score: z.number(),
  token: z.string(),
});

export const loginPostObjSchema = z.object({
  username: z.string().max(255),
  password: z.string().max(255),
});
