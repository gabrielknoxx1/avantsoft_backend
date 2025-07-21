import { z } from "zod";

export const deleteCustomerSchema = z.object({
	id: z.string(),
});

export const deleteCustomerResponseDefaultSchema = z.object({
	message: z.string(),
});
