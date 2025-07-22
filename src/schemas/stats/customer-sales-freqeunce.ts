import { z } from "zod";

export const customerSalesFrequenceResponseSchema = z.object({
	data: z.object({
		customerId: z.string(),
		razaoSocial: z.string(),
		sellsQuantity: z.number(),
		sellsValue: z.number(),
	}),
});

export const customerSalesFrequenceQueryDefaultSchema = z.object({
	message: z.string(),
});
