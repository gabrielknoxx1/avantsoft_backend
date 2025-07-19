import { z } from "zod";
import type { FastifyTypedInstance } from "../../types";

export async function customerSalesMediaRoute(app: FastifyTypedInstance) {
	return app.get(
		"/customer-sales-media",
		{
			schema: {
				tags: ["Stats"],
				description: "Get customer sales media",
				query: z.object({
					customerId: z.string(),
				}),
				response: {
					202: z.object({
						message: z.string(),
					}),
					401: z.object({
						message: z.string(),
					}),
				},
			},
		},
		async (request, reply) => {
			return reply.status(202).send({ message: "Hello World" });
		},
	);
}
