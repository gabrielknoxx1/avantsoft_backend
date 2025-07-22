import { z } from "zod";

export const registerCustomerSchema = z.object({
	razaoSocial: z.string(),
	email: z.email(),
	cnpj: z.string().min(14),
	phone: z.string().min(11),
	address: z.string().optional(),
	description: z.string().optional(),
});

export const registerCustomerResponseDefaultSchema = z.object({
	message: z.string(),
});
