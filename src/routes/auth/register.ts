import { z } from "zod";
import type { FastifyTypedInstance } from "../../types";

export async function registerRoute(app: FastifyTypedInstance) {
	return app.post(
		"/register",
		{
			schema: {
				tags: ["Auth"],
				description: "Register a new user",
				body: z.object({
					email: z.string().email(),
					password: z.string().min(8),
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
