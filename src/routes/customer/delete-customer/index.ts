import type { FastifyTypedInstance } from "../../../types";
import {
	deleteCustomerResponseDefaultSchema,
	deleteCustomerSchema,
} from "../../../schemas/customer/delete";
import { prisma } from "../../../services/database/prisma";

export async function deleteCustomerRoute(app: FastifyTypedInstance) {
	return app.delete(
		"/delete-customer",
		{
			schema: {
				tags: ["Customer"],
				description: "Delete a customer",
				body: deleteCustomerSchema,
				response: {
					202: deleteCustomerResponseDefaultSchema,
					401: deleteCustomerResponseDefaultSchema,
				},
			},
		},
		async (request, reply) => {
			if (!request.cookies.userId) {
				return reply.status(401).send({ message: "User not found" });
			}

			const { id } = request.body;

			await prisma.customer.delete({
				where: { id },
			});

			return reply.status(202).send({ message: "Customer deleted" });
		},
	);
}
