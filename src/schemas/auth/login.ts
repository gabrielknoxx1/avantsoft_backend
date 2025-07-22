import { z } from "zod";

export const loginSchema = z.object({
	email: z.email(),
	password: z.string().min(8),
});

export const loginResponseDefaultSchema = z.object({
	message: z.string(),
});

export const loginResponseSuccessSchema = z.object({
	token: z.string(),
});
