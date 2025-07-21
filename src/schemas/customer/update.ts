import { z } from "zod";

export const updateCustomerSchema = z.object({
	id: z.string(),
	razaoSocial: z.string().min(3).optional(),
	email: z.email().optional(),
	cnpj: z.string().min(14).optional(),
	phone: z.string().min(11).optional(),
	address: z.string().optional(),
	description: z.string().optional(),
});

export const updateCustomerResponseDefaultSchema = z.object({
	message: z.string(),
});
