import { z } from "zod";
import type { FastifyTypedInstance } from "../../types";
import { prisma } from "../../services/database/prisma";
import {
	customerSalesVolumeQueryDefaultSchema,
	customerSalesVolumeResponseSchema,
} from "../../schemas/stats/customer-sales-volume";

export async function customerSalesVolumeRoute(app: FastifyTypedInstance) {
	return app.get(
		"/customer-sales-volume",
		{
			schema: {
				tags: ["Stats"],
				description: "Get customer sales volume",
				response: {
					202: customerSalesVolumeResponseSchema,
					401: customerSalesVolumeQueryDefaultSchema,
				},
			},
		},
		async (request, reply) => {
			if (!request.cookies.userId) {
				return reply.status(401).send({ message: "User not found" });
			}

			const customerSales = await prisma.sell.groupBy({
				by: ["customerId"],

				_sum: {
					totalValue: true,
				},
				_count: {
					id: true,
				},
				orderBy: {
					_sum: {
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
					sellsQuantity: topCustomer._count.id,
					sellsValue: topCustomer._sum.totalValue || 0,
				},
			});
		},
	);
}
