import { z } from "zod";
import type { FastifyTypedInstance } from "../../types";

export async function forgotPasswordRoute(app: FastifyTypedInstance) {
	return app.post(
		"/forgot-password",
		{
			schema: {
				tags: ["Auth"],
				description: "Forgot password",
				body: z.object({
					email: z.string().email(),
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
