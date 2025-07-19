import { z } from "zod";
import type { FastifyTypedInstance } from "../../types";

export async function customerSalesFrequenceRoute(app: FastifyTypedInstance) {
	return app.get(
		"/customer-sales-frequence",
		{
			schema: {
				tags: ["Stats"],
				description: "Get customer sales frequence",
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
