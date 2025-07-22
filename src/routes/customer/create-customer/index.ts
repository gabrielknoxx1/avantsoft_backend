import type { FastifyTypedInstance } from "../../../types";
import {
	registerCustomerResponseDefaultSchema,
	registerCustomerSchema,
} from "../../../schemas/customer/register";
import { prisma } from "../../../services/database/prisma";

export async function createCustomerRoute(app: FastifyTypedInstance) {
	return app.post(
		"/create-customer",
		{
			schema: {
				tags: ["Customer"],
				description: "Create a new customer",
				body: registerCustomerSchema,
				response: {
					202: registerCustomerResponseDefaultSchema,
					401: registerCustomerResponseDefaultSchema,
				},
			},
		},
		async (request, reply) => {
			if (!request.cookies.userId) {
				return reply.status(401).send({ message: "User not found" });
			}
			const { razaoSocial, email, cnpj, phone, address, description } =
				request.body;

			await prisma.customer.create({
				data: {
					razaoSocial,
					email,
					cnpj,
					phone,
					address: address ?? "",
					description: description ?? "",
					userId: request.cookies.userId,
				},
			});
			return reply.status(202).send({ message: "Customer created" });
		},
	);
}
