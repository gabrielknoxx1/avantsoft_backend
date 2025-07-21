import type { FastifyTypedInstance } from "../../types";
import {
	registerResponseDefaultSchema,
	registerSchema,
} from "../../schemas/auth/register";
import { prisma } from "../../services/database/prisma";

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
			const { name, email, password, confirmPassword } = request.body;

			if (password !== confirmPassword) {
				return reply.status(400).send({ message: "Passwords do not match" });
			}

			await prisma.user.create({
				data: {
					name,
					email,
					password,
					confirmPassword,
				},
			});

			return reply
				.status(202)
				.send({ message: "User registered successfully" });
		},
	);
}
