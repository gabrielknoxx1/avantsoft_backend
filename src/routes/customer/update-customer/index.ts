import type { FastifyTypedInstance } from "../../../types";
import {
	updateCustomerResponseDefaultSchema,
	updateCustomerSchema,
} from "../../../schemas/customer/update";
import { prisma } from "../../../services/database/prisma";

export async function updateCustomerRoute(app: FastifyTypedInstance) {
	return app.patch(
		"/update-customer",
		{
			schema: {
				tags: ["Customer"],
				description: "Update a customer",
				body: updateCustomerSchema,
				response: {
					202: updateCustomerResponseDefaultSchema,
					401: updateCustomerResponseDefaultSchema,
				},
			},
		},
		async (request, reply) => {
			if (!request.cookies.userId) {
				return reply.status(401).send({ message: "User not found" });
			}

			const { id, razaoSocial, email, cnpj, phone, address, description } =
				request.body;

			await prisma.customer.update({
				where: { id },
				data: { razaoSocial, email, cnpj, phone, address, description },
			});

			return reply.status(202).send({ message: "Customer updated" });
		},
	);
}
