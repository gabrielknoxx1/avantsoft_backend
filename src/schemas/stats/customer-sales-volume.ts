import { z } from "zod";

export const customerSalesVolumeResponseSchema = z.object({
	data: z.object({
		customerId: z.string(),
		razaoSocial: z.string(),
		sellsQuantity: z.number(),
		sellsValue: z.number(),
	}),
});

export const customerSalesVolumeQueryDefaultSchema = z.object({
	message: z.string(),
});
