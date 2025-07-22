import { z } from "zod";

export const customerSalesMediaResponseSchema = z.object({
	data: z.object({
		customerId: z.string(),
		razaoSocial: z.string(),
		sellsQuantity: z.number(),
		sellsValue: z.number(),
	}),
});

export const customerSalesMediaQueryDefaultSchema = z.object({
	message: z.string(),
});
