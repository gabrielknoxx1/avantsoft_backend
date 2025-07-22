import { z } from "zod";

export const sellsByDayQuerySchema = z.object({
	date: z.date().optional(),
});

export const sellsByDayResponseSchema = z.object({
	data: z.array(
		z.object({
			date: z.date(),
			sellsQuantity: z.number(),
			sellsValue: z.number(),
		}),
	),
});

export const sellsByDayQueryDefaultSchema = z.object({
	message: z.string(),
});
