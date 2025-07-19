import { z } from "zod";
import type { FastifyTypedInstance } from "../../types";

export async function updateCustomerRoute(app: FastifyTypedInstance) {
	return app.patch(
		"/update-customer",
		{
			schema: {
				tags: ["Customer"],
				description: "Update a customer",
				body: z.object({
					name: z.string(),
					email: z.string().email(),
					phone: z.string(),
					address: z.string(),
					password: z.string().min(8),
					confirmPassword: z.string().min(8),
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
