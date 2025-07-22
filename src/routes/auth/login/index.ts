import type { FastifyTypedInstance } from "../../../types";
import {
	loginResponseDefaultSchema,
	loginResponseSuccessSchema,
	loginSchema,
} from "../../../schemas/auth/login";
import { prisma } from "../../../services/database/prisma";

export async function loginRoute(app: FastifyTypedInstance) {
	return app.post(
		"/login",
		{
			schema: {
				tags: ["Auth"],
				description: "Login a user",
				body: loginSchema,
				response: {
					202: loginResponseSuccessSchema,
					401: loginResponseDefaultSchema,
				},
			},
		},
		async (request, reply) => {
			const { email, password } = request.body;

			const user = await prisma.user.findUnique({
				where: { email },
			});

			if (!user) {
				return reply.status(401).send({ message: "User not found" });
			}

			if (password !== user.password) {
				return reply.status(401).send({ message: "Invalid password" });
			}
			const token = user.id;
			let userId = request.cookies.userId;
			if (!userId) {
				reply.setCookie("userId", token, {
					path: "/",
					maxAge: 60 * 60 * 24 * 7, // 7 days
				});
			}
			return reply.status(202).send({ token });
		},
	);
}
