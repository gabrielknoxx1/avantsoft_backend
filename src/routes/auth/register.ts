import type { FastifyTypedInstance } from "../../types";
import {
	registerResponseDefaultSchema,
	registerSchema,
} from "../../schemas/auth/register";

export async function registerRoute(app: FastifyTypedInstance) {
	return app.post(
		"/register",
		{
			schema: {
				tags: ["Auth"],
				description: "Register a new user",
				body: registerSchema,
				response: {
					202: registerResponseDefaultSchema.describe(
						"User registered successfully",
					),
					401: registerResponseDefaultSchema.describe("User not registered"),
					500: registerResponseDefaultSchema.describe("Internal server error"),
				},
			},
		},
		async (request, reply) => {
			return reply.status(202).send({ message: "Hello World" });
		},
	);
}
