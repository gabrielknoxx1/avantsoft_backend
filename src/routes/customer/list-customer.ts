import { z } from "zod";
import type { FastifyTypedInstance } from "../../types";

export async function listCustomerRoute(app: FastifyTypedInstance) {
	return app.get(
		"/list-customer",
		{
			schema: {
				tags: ["Customer"],
				description: "List all customers",
				query: z.object({
					page: z.number().optional(),
					limit: z.number().optional(),
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
