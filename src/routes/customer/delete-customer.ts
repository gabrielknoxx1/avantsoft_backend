import { z } from "zod";
import type { FastifyTypedInstance } from "../../types";

export async function deleteCustomerRoute(app: FastifyTypedInstance) {
	return app.delete(
		"/delete-customer",
		{
			schema: {
				tags: ["Customer"],
				description: "Delete a customer",
				body: z.object({
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
