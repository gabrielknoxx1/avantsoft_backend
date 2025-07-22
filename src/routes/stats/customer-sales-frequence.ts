import { z } from "zod";
import type { FastifyTypedInstance } from "../../types";
import { prisma } from "../../services/database/prisma";
import {
	customerSalesFrequenceQueryDefaultSchema,
	customerSalesFrequenceResponseSchema,
} from "../../schemas/stats/customer-sales-freqeunce";

export async function customerSalesFrequenceRoute(app: FastifyTypedInstance) {
	return app.get(
		"/customer-sales-frequence",
		{
			schema: {
				tags: ["Stats"],
				description: "Get customer sales frequence",
				response: {
					202: customerSalesFrequenceResponseSchema,
					401: customerSalesFrequenceQueryDefaultSchema,
				},
			},
		},
		async (request, reply) => {
			if (!request.cookies.userId) {
				return reply.status(401).send({ message: "User not found" });
			}

			const customerSales = await prisma.sell.groupBy({
				by: ["customerId", "sellDate"],
				_count: {
					id: true,
				},
				_sum: {
					totalValue: true,
				},
				orderBy: {
					_count: {
						id: "desc",
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
