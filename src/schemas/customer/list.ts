import { z } from "zod";

export const listCustomerSchema = z.object({
	razaoSocial: z.string().optional(),
	email: z.string().optional(),
	cnpj: z.string().optional(),
});

export const listCustomerResponseDefaultSchema = z.object({
	message: z.string(),
});

export const listCustomerResponseSuccessSchema = z.object({
	customers: z.array(
		z.object({
			id: z.string(),
			razaoSocial: z.string(),
			email: z.string(),
			cnpj: z.string().min(14),
			phone: z.string().min(11),
			address: z.string().optional(),
			description: z.string().optional(),
		}),
	),
});
