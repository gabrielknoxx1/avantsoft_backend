import { z } from "zod";

export const registerSchema = z.object({
	email: z.email(),
	name: z.string(),
	password: z.string().min(8),
	confirmPassword: z.string().min(8),
});

export const registerResponseDefaultSchema = z.object({
	message: z.string(),
});
