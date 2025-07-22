import type { FastifyTypedInstance } from "../../../types";
import {
	listCustomerResponseDefaultSchema,
	listCustomerResponseSuccessSchema,
	listCustomerSchema,
} from "../../../schemas/customer/list";
import { prisma } from "../../../services/database/prisma";

export async function listCustomerRoute(app: FastifyTypedInstance) {
	return app.get(
		"/list-customer",
		{
			schema: {
				tags: ["Customer"],
				description: "List all customers",
				querystring: listCustomerSchema,

				response: {
					202: listCustomerResponseSuccessSchema,
					401: listCustomerResponseDefaultSchema,
				},
			},
		},
		async (request, reply) => {
			if (!request.cookies.userId) {
				return reply.status(401).send({ message: "User not found" });
			}

			const { razaoSocial, email, cnpj } = request.query;

			const customers = await prisma.customer.findMany({
				where: {
					razaoSocial,
					email,
					cnpj,
				},
			});
			return reply.status(202).send({ customers });
		},
	);
}
