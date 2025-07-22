import { z } from "zod";
import type { FastifyTypedInstance } from "../../types";
import { prisma } from "../../services/database/prisma";
import {
	customerSalesMediaQueryDefaultSchema,
	customerSalesMediaResponseSchema,
} from "../../schemas/stats/customer-sales-media";

export async function customerSalesMediaRoute(app: FastifyTypedInstance) {
	return app.get(
		"/customer-sales-media",
		{
			schema: {
				tags: ["Stats"],
				description: "Get customer sales media",
				response: {
					202: customerSalesMediaResponseSchema,
					401: customerSalesMediaQueryDefaultSchema,
				},
			},
		},
		async (request, reply) => {
			if (!request.cookies.userId) {
				return reply.status(401).send({ message: "User not found" });
			}

			const customerSales = await prisma.sell.groupBy({
				by: ["customerId"],
				_avg: {
					totalValue: true,
				},
				_count: {
					id: true,
				},
				orderBy: {
					_avg: {
						totalValue: "desc",
					},
				},
				take: 1,
			});

			const topCustomer = customerSales[0];
			const customer = await prisma.customer.findUnique({
				where: { id: topCustomer.customerId },
				select: { razaoSocial: true },
			});
			return reply.status(202).send({
				data: {
					customerId: topCustomer.customerId,
					razaoSocial: customer?.razaoSocial || "Cliente não encontrado",
					sellsValue: topCustomer._avg.totalValue || 0,
					sellsQuantity: topCustomer._count.id,
				},
			});
		},
	);
}
